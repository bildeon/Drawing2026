package com.example.application.zoomdb;

import com.example.application.weld.CalcValues;
import com.example.application.diverse.camvas.GreetingComponent;;
import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import jakarta.annotation.security.PermitAll;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import com.vaadin.flow.server.VaadinSession;
import com.example.application.tenant.TenantUrlService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

@Route("lastviewsave")
@PermitAll
public class MainViewSave extends HorizontalLayout  {

    private final TenantUrlService tenantUrlService;
    private final SvgImageRepository repository;
   private final String currentUser = VaadinSession.getCurrent().getAttribute("tenantUser") != null ?            VaadinSession.getCurrent().getAttribute("tenantUser").toString() :            GreetingComponent.getUserIdents();
    private final Div canvas = new Div();
    private final Div gallery = new Div();
    private final Div svg_name = new Div();
    private final Input rotationInput = new Input();
    private final Button rotateButton = new Button("Rotate selected image");
    private final Span apiResponse = new Span();
    private boolean eraserActive = false;
    HorizontalLayout menuBar = new HorizontalLayout();
    private boolean eraserMode = false;

    public MainViewSave(@Autowired SvgImageRepository repository,  TenantUrlService tenantUrlService  ) {
       this.repository = repository;

        this.tenantUrlService = tenantUrlService;
        UI ui = UI.getCurrent();
        VaadinSession session = VaadinSession.getCurrent();
        String tenantId = (String) session.getAttribute("tenantId");
        String userId   = (String) session.getAttribute("userId");

        if (tenantId == null || tenantId.isBlank() || userId == null || userId.isBlank()) {
            UI.getCurrent().getPage().setLocation("accessdenied");
            return;
        }



        setSizeFull();
        createHeader();
        createMenu();

        gallery.setWidth("200px");
        gallery.getStyle().set("background", "#ffffff");  // "#f0f0f0");
        gallery.getStyle().set("z-index", "5").set("position", "relative");
        add(gallery);
        refreshGallery();

        canvas.setWidth("1200px");
        canvas.setHeight("860px");
        canvas.getStyle().set("border", "1px solid black");
        canvas.setId("svg-canvas");
        canvas.getElement().setProperty("innerHTML", "<svg id=\"svgCanvas\" width=\"1200\" height=\"860\" viewBox=\"0 0 1200 860\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"zoomGroup\"></g></svg>");
        add(canvas);

        svg_name.getStyle().set("display", "none");
        svg_name.setId("svg-canvas-name");
        add(svg_name);

        refreshGallery();

    }

    private void createMenu() {

        VerticalLayout menu = new VerticalLayout();
        menu.setWidth("200px");
        menu.getStyle().set("z-index", "10").set("background", "#1D2125").set("color", "white");  //  #4e5d71  #666a70

        Button home = new Button("Home");
        home.getStyle().set("color", "white");
        home.addClickListener(e -> UI.getCurrent().getPage().setLocation("home"));
        menu.add(home);

        Button exportButton = new Button("Send to API");
        exportButton.getStyle().set("color", "white");
        exportButton.addClickListener(e -> sendToApi());
        menu.add(exportButton);
        apiResponse.getStyle().set("color", "white");
        menu.add(apiResponse);
        add(menu);

        TextField textField = new TextField("");  // "Text"
        textField.setValue("Enter text . . . .");
        textField.getStyle().set("color", "white");
        Button addTextButton = new Button("Add text to canvas");
        addTextButton.getStyle().set("color", "white");
        addTextButton.addClickListener(e -> {
            UI.getCurrent().getPage().executeJs("""
                        const svg = document.getElementById('svgCanvas');
                        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        text.setAttribute("x", "100");
                        text.setAttribute("y", "100");
                        text.setAttribute("fill", "black");
                        text.setAttribute("font-size", "18");
                        text.setAttribute("cursor", "move");
                        text.textContent = $0;
                        svg.appendChild(text);
                    
                        let offsetX = 0, offsetY = 0, isDragging = false;
                        text.addEventListener('mousedown', (e) => {
                            isDragging = true;
                            offsetX = e.clientX - parseFloat(text.getAttribute('x'));
                            offsetY = e.clientY - parseFloat(text.getAttribute('y'));
                        });
                        window.addEventListener('mousemove', (e) => {
                            if (isDragging) {
                                text.setAttribute('x', e.clientX - offsetX);
                                text.setAttribute('y', e.clientY - offsetY);
                            }
                        });
                        window.addEventListener('mouseup', () => { isDragging = false; });
                    """, textField.getValue());
        });
        menu.add(textField, addTextButton);
////////
        TextField r = new TextField("Eraser radius");
        r.setValue("10");

        Button setR = new Button("Set radius", e ->
                UI.getCurrent().getPage().executeJs("window.__eraserRadius = parseFloat($0)||10;", r.getValue())
        );
/// ///////
        /*
        menu.add(textField, addTextButton);
        //rotate
        //    rotationInput.setPlaceholder("Vinkel (grader)");
        //    rotationInput.setValue("15");
        TextField rotationInput = new TextField("");     // Angle (grads)
        rotationInput.setValue("15");
        rotationInput.getStyle().set("color", "white");
        rotateButton.getStyle().set("color", "white");
        rotateButton.addClickListener(e -> {
            String angle = rotationInput.getValue();
            int vinkel = Integer.parseInt(angle);
            rotateSelected(vinkel);
            ;
        });
        menu.add(rotationInput, rotateButton);

         */


        /////////////////////////
        Button viskelaerKnapp = new Button("Eraser off/on");
        viskelaerKnapp.getStyle().set("color", "white");

        viskelaerKnapp.addClickListener(e -> {
            eraserActive = !eraserActive;

            UI.getCurrent().getPage().executeJs("""
      (function(){
        window.__eraserEnabled = $0;

        const svgEl = document.getElementById("svgCanvas");
        const group = document.getElementById("zoomGroup");
        if(!svgEl || !group) return;

        // Installer én gang
        if(!window.__eraserInstalled){
          window.__eraserInstalled = true;

          function getActive(){
            return group.querySelector('.svg-item[data-active="true"]');
          }

          function toSvgPoint(clientX, clientY){
            const pt = svgEl.createSVGPoint();
            pt.x = clientX; pt.y = clientY;
            const ctm = svgEl.getScreenCTM();
            return ctm ? pt.matrixTransform(ctm.inverse()) : {x:0,y:0};
          }

          // Konverter et punkt fra svgCanvas-koordinater til lokal-koordinater inni item
          function toItemLocalPoint(item, svgPoint){
            const pt = svgEl.createSVGPoint();
            pt.x = svgPoint.x; pt.y = svgPoint.y;

            const ctm = item.getCTM(); // item -> svgCanvas
            if(!ctm) return {x: svgPoint.x, y: svgPoint.y};

            const inv = ctm.inverse();
            const p2 = pt.matrixTransform(inv);
            return {x: p2.x, y: p2.y};
          }

          function makeEraserCircle(item, x, y, r){
            // legg i egen gruppe per item (så du kan slette/undo senere)
            let layer = item.querySelector(':scope > g.eraser-layer');
            if(!layer){
              layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
              layer.classList.add("eraser-layer");
              item.appendChild(layer);
            }

            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", x);
            circle.setAttribute("cy", y);
            circle.setAttribute("r", String(r));
            circle.setAttribute("fill", "white");
            circle.style.pointerEvents = "none"; // så den ikke “stjeler” klikk
            layer.appendChild(circle);
          }

          // throttling for ytelse
          let lastT = 0;

          function drawAtEvent(e){
            if(!window.__eraserEnabled) return;
            if(e.buttons !== 1) return; // venstre knapp må være nede

            const item = getActive();
            if(!item) return;

            // valgfritt: ikke viskelær når CTRL/SHIFT/ALT brukes (så det ikke krangler med rotate/zoom/pivot)
            if(e.ctrlKey || e.shiftKey || e.altKey) return;

            const now = performance.now();
            if(now - lastT < 12) return; // ~80 Hz maks
            lastT = now;

            const svgP = toSvgPoint(e.clientX, e.clientY);
            const p = toItemLocalPoint(item, svgP);

            const radius = window.__eraserRadius || 10;
            makeEraserCircle(item, p.x, p.y, radius);
          }

          // bruk pointer events
          svgEl.addEventListener("pointerdown", drawAtEvent);
          svgEl.addEventListener("pointermove", drawAtEvent);
        }

        // cursor feedback
        svgEl.style.cursor = (window.__eraserEnabled) ? "crosshair" : "";
      })();
    """, eraserActive);
        });
        menu.add(viskelaerKnapp);
/////////////
        Button clearEraser = new Button("Clear eraser (active)", e ->

                UI.getCurrent().getPage().executeJs("""
    const group = document.getElementById("zoomGroup");
    const item = group?.querySelector('.svg-item[data-active="true"]');
    item?.querySelector(':scope > g.eraser-layer')?.remove();
  """)
        );

        clearEraser.getStyle().set("color", "white");
        menu.add(clearEraser);
        /// ///////////////
        Button printButtonPart = new Button("Print");
        printButtonPart.getStyle().set("color", "white");
        printButtonPart.addClickListener(e -> printCanvasPart());
        //     menu.add(printButtonPart);

        Button downloadButton = new Button("Download as svg");
        downloadButton.getStyle().set("color", "white");
        downloadButton.addClickListener(e -> downloadCanvas());
        menu.add(downloadButton);

        Button pngButton = new Button("Download as PNG");
        pngButton.getStyle().set("color", "white");
        pngButton.addClickListener(e -> exportCanvasToPng());
        //      menu.add(pngButton);

        Button pdfButton = new Button("Download as PDF");
        pdfButton.getStyle().set("color", "white");
        pdfButton.addClickListener(e -> exportCanvasToPdf());
        //   menu.add(pdfButton);

        Button strok = new Button("--------------------");
        strok.getStyle().set("color", "white");
        menu.add(strok);
        Button tips = new Button("Tips on use:");
        tips.getStyle().set("color", "white");
        menu.add(tips);
        Button tipsF = new Button("Activate   -> klick");
        tipsF.getStyle().set("color", "white");
        menu.add(tipsF);
        Button tipsA = new Button("Move  -> drag");
        tipsA.getStyle().set("color", "white");
        menu.add(tipsA);
        Button tipsB = new Button("Zoom  ->  drag + SHIFT");
        tipsB.getStyle().set("color", "white");
        menu.add(tipsB);
        Button tipsC = new Button("Rotate ->  drag + CTRL");
        tipsC.getStyle().set("color", "white");
        menu.add(tipsC);
        Button tipsD = new Button("Delete activ  -> Delete");
        tipsD.getStyle().set("color", "white");
        menu.add(tipsD);
        Button tipsE = new Button("Rotatepoint -> klick + ALT");
        tipsE.getStyle().set("color", "white");
        //       menu.add(tipsE);

    }
    // meny slutt


    private void rotateSelected(int angle) {
        UI.getCurrent().getPage().executeJs("""
                    const active = document.getElementById('svgGroup');
                    if (!active) return;
                
                    const svg = document.getElementById('zoomGroup');
                
                    svg.addEventListener('click', function handler(evt) {
                        svg.removeEventListener('click', handler); // bare én gang
                
                        const pt = svg.createSVGPoint();
                        pt.x = evt.clientX;
                        pt.y = evt.clientY;
                        const cursorPt = pt.matrixTransform(svg.getScreenCTM().inverse());
                
                        let currentAngle = parseInt(active.dataset.angle || '0');
                        currentAngle = (currentAngle + $0) % 360;
                        active.dataset.angle = currentAngle;
                
                        const scale = active.dataset.scale || '1';
                        const tx = active.dataset.tx || '0';
                        const ty = active.dataset.ty || '0';
                
                        active.setAttribute('transform',
                            `translate(${tx},${ty}) rotate(${currentAngle}, ${cursorPt.x}, ${cursorPt.y}) scale(${scale})`);
                    });
                """, angle);
    }

    private void addToCanvas(SvgImage svg) {
        // Show SVG name in the div
        svg_name.setText(svg.getName());
        String itemId = "item-" + java.util.UUID.randomUUID();

        UI.getCurrent().getPage().executeJs("""
      (function addToCanvasWhenReady(){
        const svgEl = document.getElementById('svgCanvas');
        const group = document.getElementById('zoomGroup');

        // Hvis DOM ikke er klar ennå, prøv igjen
        if(!svgEl || !group){
          requestAnimationFrame(addToCanvasWhenReady);
          return;
        }

        // -------------------- CONTROLLER (installer én gang) --------------------
        if(!svgEl.__controllerInstalled){
          svgEl.__controllerInstalled = true;

          function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

          function getActive(){
            return group.querySelector('.svg-item[data-active="true"]');
          }

          function setActive(item){
            group.querySelectorAll('.svg-item').forEach(x => {
              x.dataset.active = "false";
              x.style.opacity = "0.7";
            });
            if(item){
              item.dataset.active = "true";
              item.style.opacity = "1.0";
              // bring-to-front (så aktiv ligger øverst)
              group.appendChild(item);
            }
          }

          // Robust: finn svg-item via composedPath (bedre enn closest i SVG)
          function findItemFromEvent(e){
            const path = e.composedPath ? e.composedPath() : [];
            for (const n of path){
              if(n && n.classList && n.classList.contains('svg-item')) return n;
            }
            return null;
          }

          // Screen -> SVG koordinater (i svgCanvas sitt koordinatsystem)
          function toSvgPoint(clientX, clientY){
            const pt = svgEl.createSVGPoint();
            pt.x = clientX; pt.y = clientY;
            const ctm = svgEl.getScreenCTM();
            return ctm ? pt.matrixTransform(ctm.inverse()) : {x:0,y:0};
          }

          function updateTransform(item){
            const tx = parseFloat(item.dataset.tx||'0');
            const ty = parseFloat(item.dataset.ty||'0');
            const s  = parseFloat(item.dataset.scale||'1');
            const a  = parseFloat(item.dataset.angle||'0');
            const px = parseFloat(item.dataset.px||'0');
            const py = parseFloat(item.dataset.py||'0');

            // translate + (pivot rotate/scale) rundt (px,py)
            item.setAttribute(
              'transform',
              `translate(${tx},${ty}) translate(${px},${py}) rotate(${a}) scale(${s}) translate(${-px},${-py})`
            );
          }

          // Zoom rundt cursor (holder punktet under cursor fast)
          function zoomAt(item, clientX, clientY, factor){
            const p = toSvgPoint(clientX, clientY);

            let s  = parseFloat(item.dataset.scale||'1');
            let tx = parseFloat(item.dataset.tx||'0');
            let ty = parseFloat(item.dataset.ty||'0');

            const minS = 0.1, maxS = 8.0;
            const newS = clamp(s * factor, minS, maxS);
            const k = newS / s;

            tx = p.x - k * (p.x - tx);
            ty = p.y - k * (p.y - ty);

            item.dataset.scale = String(newS);
            item.dataset.tx = String(tx);
            item.dataset.ty = String(ty);
            updateTransform(item);
          }

          // -------------------- INPUT --------------------
          let dragging = false;
          let lastX = 0, lastY = 0;

          // pointerdown: velg aktiv, ALT=sett pivot, ellers start drag
          svgEl.addEventListener('pointerdown', (e) => {
            const hit = findItemFromEvent(e);
            if(hit && group.contains(hit)){
              setActive(hit);
            }

            const item = getActive();
            if(!item) return;

            // ALT + klikkned => sett pivot og IKKE drag
            if(e.altKey){
              const p = toSvgPoint(e.clientX, e.clientY);
              item.dataset.px = String(p.x);
              item.dataset.py = String(p.y);
              updateTransform(item);

              e.preventDefault();
              e.stopPropagation();
              return;
            }

            dragging = true;
            lastX = e.clientX;
            lastY = e.clientY;
            svgEl.setPointerCapture?.(e.pointerId);

            if(e.ctrlKey) svgEl.style.cursor = 'crosshair';     // rotate
            else if(e.shiftKey) svgEl.style.cursor = 'ns-resize';// zoom drag
            else svgEl.style.cursor = 'move';                   // pan
          });

          window.addEventListener('pointerup', () => {
            dragging = false;
            svgEl.style.cursor = '';
          });

          window.addEventListener('pointermove', (e) => {
            if(!dragging) return;
            const item = getActive();
            if(!item) return;

            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            lastX = e.clientX;
            lastY = e.clientY;

            // CTRL + drag => rotate (horisontal)
            if(e.ctrlKey){
              let a = parseFloat(item.dataset.angle||'0');
              a += dx * 0.5; // juster hastighet
              item.dataset.angle = String(a);
              updateTransform(item);
              return;
            }

            // SHIFT + drag => zoom (vertikal) rundt cursor
            if(e.shiftKey){
              const factor = Math.exp(-dy * 0.01);
              zoomAt(item, e.clientX, e.clientY, factor);
              return;
            }

            // Normal drag => pan i svg-units
            const p0 = toSvgPoint(e.clientX - dx, e.clientY - dy);
            const p1 = toSvgPoint(e.clientX, e.clientY);

            let tx = parseFloat(item.dataset.tx||'0');
            let ty = parseFloat(item.dataset.ty||'0');
            tx += (p1.x - p0.x);
            ty += (p1.y - p0.y);

            item.dataset.tx = String(tx);
            item.dataset.ty = String(ty);
            updateTransform(item);
          });

          // Wheel => smooth zoom rundt cursor
          svgEl.addEventListener('wheel', (e) => {
            const item = getActive();
            if(!item) return;
            e.preventDefault();
            const factor = Math.exp(-e.deltaY * 0.002); // juster 0.001–0.004
            zoomAt(item, e.clientX, e.clientY, factor);
          }, { passive:false });

          // Delete => slett aktiv
          window.addEventListener('keydown', (e) => {
            if(e.key !== 'Delete') return;
            const item = getActive();
            if(item) item.remove();
          });
        }

        // -------------------- LEGG INN NY SVG SOM ITEM --------------------
        const parser = new DOMParser();
        const doc = parser.parseFromString($0, "image/svg+xml");
        const originalSvg = doc.documentElement;

        const item = document.createElementNS("http://www.w3.org/2000/svg", "g");
        item.classList.add("svg-item");
        item.id = $1;

        // Viktig: gjør wrapperen klikkbar
        item.setAttribute('pointer-events', 'all');
        item.style.pointerEvents = 'all';

        // init state
        item.dataset.active = "false";
        item.dataset.tx = "0";
        item.dataset.ty = "0";
        item.dataset.scale = "1";
        item.dataset.angle = "0";
        item.dataset.px = "0";
        item.dataset.py = "0";

        // flytt children fra filens <svg> inn i item
        while(originalSvg.firstChild){
          item.appendChild(originalSvg.firstChild);
        }

        group.appendChild(item);

        // Sett pivot til midten av item hvis mulig
        try{
          const bb = item.getBBox();
          item.dataset.px = String(bb.x + bb.width/2);
          item.dataset.py = String(bb.y + bb.height/2);
        } catch(err){
          // ok, pivot kan settes med ALT+klikk senere
        }

        // Sett ny som aktiv
        group.querySelectorAll('.svg-item').forEach(x => { x.dataset.active="false"; x.style.opacity="0.7"; });
        item.dataset.active = "true";
        item.style.opacity = "1.0";
        group.appendChild(item);

        // initial transform
        const tx = parseFloat(item.dataset.tx||'0');
        const ty = parseFloat(item.dataset.ty||'0');
        const s  = parseFloat(item.dataset.scale||'1');
        const a  = parseFloat(item.dataset.angle||'0');
        const px = parseFloat(item.dataset.px||'0');
        const py = parseFloat(item.dataset.py||'0');
        item.setAttribute(
          'transform',
          `translate(${tx},${ty}) translate(${px},${py}) rotate(${a}) scale(${s}) translate(${-px},${-py})`
        );

      })();
    """, svg.getContent(), itemId);
    }



    private Upload createUploadComponent() {
        MemoryBuffer buffer = new MemoryBuffer();
        Upload upload = new Upload(buffer);
        upload.setAcceptedFileTypes(".svg");
        upload.addSucceededListener(event -> {
            try {
                InputStream input = buffer.getInputStream();
                String content = IOUtils.toString(input, StandardCharsets.UTF_8);
                SvgImage image = new SvgImage();
                image.setName(event.getFileName());
                image.setContent(content);
                image.setUserId(CalcValues.getUserID());
                image.setCreatedAt(LocalDateTime.now());
                repository.save(image);
                refreshGallery();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        return upload;
    }

    private void refreshGallery() {
        gallery.removeAll();
        Upload upload = createUploadComponent();
        //   upload.getStyle().set("color", "white");
        gallery.add(upload);
        gallery.add(new Span("Gallery"));
        List<SvgImage> images = repository.findByUserId(CalcValues.getUserID());
        images.stream()
                .sorted(Comparator.comparing(SvgImage::getCreatedAt).reversed())
                .limit(5)
                .forEach(svg -> {
                    StreamResource resource = new StreamResource(svg.getName(), () -> new ByteArrayInputStream(svg.getContent().getBytes(StandardCharsets.UTF_8)));
                    Image img = new Image(resource, svg.getName());
                    img.setWidth("200px");
                    img.addClickListener(e -> addToCanvas(svg));
                    gallery.add(img);
                });
    }

    private void exportCanvas(String type) {
        UI.getCurrent().getPage().executeJs("""
                    const svg = document.getElementById('svgCanvas');
                    if (!svg) return;
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const data = new XMLSerializer().serializeToString(svg);
                    const blob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
                    const url = URL.createObjectURL(blob);
                    const img = new Image();
                    img.onload = function() {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                        const link = document.createElement('a');
                        link.download = 'exported.' + arguments[0];
                        link.href = canvas.toDataURL('image/' + arguments[0]);
                        link.click();
                        URL.revokeObjectURL(url);
                    };
                    img.src = url;
                """, type);
    }

    private void applyZoom(String value) {
        UI.getCurrent().getPage().executeJs(
                "const svg = document.getElementById('active-svg'); if(svg) { svg.style.transform = `scale(${value})`; }"
        );
    }

    private void exportCanvasToPng() {
        UI.getCurrent().getPage().executeJs("""
                    const svgElement = document.getElementById("svgCanvas");
                    const svgData = new XMLSerializer().serializeToString(svgElement);
                    const canvas = document.createElement("canvas");
                    canvas.width = svgElement.clientWidth;
                    canvas.height = svgElement.clientHeight;
                    const ctx = canvas.getContext("2d");
                
                    const img = new Image();
                    const svgBlob = new Blob([svgData], {type: "image/svg+xml;charset=utf-8"});
                    const url = URL.createObjectURL(svgBlob);
                
                    img.onload = () => {
                        ctx.drawImage(img, 0, 0);
                        URL.revokeObjectURL(url);
                
                        const pngUrl = canvas.toDataURL("image/png");
                        const a = document.createElement("a");
                        a.href = pngUrl;
                        a.download = "tegneomrade.png";
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    };
                    img.src = url;
                """);
    }

    private void exportCanvasToPdf() {
        UI.getCurrent().getPage().executeJs("""
                    const svgElement = document.getElementById("svgCanvas");
                    const svgData = new XMLSerializer().serializeToString(svgElement);
                    const canvas = document.createElement("canvas");
                    canvas.width = svgElement.clientWidth;
                    canvas.height = svgElement.clientHeight;
                    const ctx = canvas.getContext("2d");
                
                    const img = new Image();
                    const svgBlob = new Blob([svgData], {type: "image/svg+xml;charset=utf-8"});
                    const url = URL.createObjectURL(svgBlob);
                
                    img.onload = () => {
                        ctx.drawImage(img, 0, 0);
                        URL.revokeObjectURL(url);
                
                        const imgData = canvas.toDataURL("image/png");
                        const pdf = new jspdf.jsPDF({
                            orientation: "landscape",
                            unit: "pt",
                            format: [canvas.width, canvas.height]
                        });
                        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                        pdf.save("tegneomrade.pdf");
                    };
                    img.src = url;
                """);
    }

    private void downloadCanvas() {
        UI.getCurrent().getPage().executeJs("""
                    const svg = document.getElementById('svgCanvas');
                    if (!svg) return;
                    const clone = svg.cloneNode(true);
                    clone.removeAttribute('id');
                    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    const serializer = new XMLSerializer();
                    const content = serializer.serializeToString(clone);
                    const blob = new Blob([content], {type: "image/svg+xml"});
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'tegneomrade.svg';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                """);
    }


    private void sendToApi() {
        UI.getCurrent().getPage().executeJs("""
                    const svg = document.getElementById('svgCanvas');
                    if (!svg) return;
                     const svg_name = document.getElementById('svg-canvas-name');
                    const clone = svg.cloneNode(true);
                    clone.removeAttribute('id');
                    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                
                    const serializer = new XMLSerializer();
                    const content = serializer.serializeToString(clone);
                    $0.$server.sendSvgToApi(content, svg_name.textContent);
                """, getElement());
    }

    @ClientCallable
    public void sendSvgToApi(String content, String svgName) {
        try {
            UI ui = UI.getCurrent();
            VaadinSession session = VaadinSession.getCurrent();
            String tenantId = (String) session.getAttribute("tenantId");
            String userId   = (String) session.getAttribute("userId");
            String wpqrId   = (String) session.getAttribute("wpqrId");
            if (content == null || content.isBlank() || content.getBytes(StandardCharsets.UTF_8).length <= 115) {
                if (ui != null) {
                    ui.access(() -> apiResponse.setText("⚠️ SVG content is empty! Nothing to send."));
                }
                return;
            }
            if (tenantId == null || tenantId.isBlank() || userId == null || userId.isBlank()) {
                if (ui != null) {
                    ui.access(() -> apiResponse.setText(
                            "⚠️ Tenant ID or User ID missing! Please reload with ?tenant=xxx&user_id=yyy"
                    ));
                }
                return;  // ❗ STOP: don't continue to send to API
            }
            // HttpHeaders headers = new HttpHeaders();
            // headers.setContentType(MediaType.APPLICATION_XML);
            // HttpEntity<String> request = new HttpEntity<>(content, headers);
            // RestTemplate restTemplate = new RestTemplate();
            // VaadinSession session = VaadinSession.getCurrent();
            // String tenantId = (String) session.getAttribute("tenantId");
            // String userId   = (String) session.getAttribute("userId");
            // body.add("tenantId", tenantId);
            // body.add("userId", userId);
            // String url = tenantUrlService.buildTenantApiUrl(tenantId);
            // System.out.println("Posting SVG to: " + url + " for user " + userId);
            // ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);

            // 🔑 Tell Nginx which tenant we want
            String hostHeader = tenantUrlService.buildTenantHostHeader(tenantId);
            headers.set("Host", hostHeader);   // e.g. demo.kjwlocal.com
            headers.set("x-tenant-name", tenantId);
            headers.set("x-api-token", tenantUrlService.getDrawingApiToken(tenantId)); // token to access the web app

            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            body.add("file", new ByteArrayResource(content.getBytes(StandardCharsets.UTF_8)) {
                @Override
                public String getFilename() {
                    return svgName != null && !svgName.isEmpty() ? svgName : tenantId +'_'+ userId + "_" + System.currentTimeMillis() + ".svg";
                }
            });
            body.add("tenantId", tenantId);
            body.add("userId", userId);
            body.add("wpqrId", wpqrId != null ? wpqrId : "");

            HttpEntity<MultiValueMap<String, Object>> request = new HttpEntity<>(body, headers);
            RestTemplate restTemplate = new RestTemplate();

            // ✅ build URL from properties instead of hardcoding .weldit.local/api/images
            String url = tenantUrlService.buildTenantApiUrl(tenantId);
            System.out.println("Posting SVG to: " + url + " for user " + userId + " tenant " + tenantId + " wpqrId " + wpqrId   );

            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            if (ui != null) {
                ui.access(() -> apiResponse.setText("Respons from API: " + response.getStatusCode()));
            }
        } catch (Exception e) {
            UI ui = UI.getCurrent();
            if (ui != null) {
                ui.access(() -> apiResponse.setText("Error by sending: " + e.getMessage()));
            }
        }
    }

    private void saveEditedSvg() {
        UI.getCurrent().getPage().executeJs("""
                    const svg = document.getElementById('svgCanvas');
                    if (!svg) return;
                    const clone = svg.cloneNode(true);
                    clone.removeAttribute('id');
                    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                
                    const serializer = new XMLSerializer();
                    const content = serializer.serializeToString(clone);
                    $0.$server.saveSvgFromClient(content);
                """, getElement());
    }

    private void printCanvas() {
        UI.getCurrent().getPage().executeJs("window.print()");
    }

    private void printCanvasPart() {
        UI.getCurrent().getPage().executeJs("""
                    const canvas = document.getElementById('svgCanvas');
                    const svg = canvas.querySelector('svg');
                    if (!svg) return;
                
                    const win = window.open('', '', 'width=1300,height=900');
                    win.document.write('<html><head><title>Utskrift</title></head><body style="margin:0;">');
                    win.document.write(svg.outerHTML);
                    win.document.write('</body></html>');
                    win.document.close();
                    win.focus();
                    setTimeout(() => win.print(), 500);
                """);
    }

    private void deleteOldImages() {
        LocalDateTime cutoffDate = LocalDateTime.now().minusWeeks(4);
        List<SvgImage> oldImages = repository.findByCreatedAtBefore(cutoffDate);

        if (!oldImages.isEmpty()) {
            repository.deleteAll(oldImages);
            Notification.show(oldImages.size() + " old images deleted.");
        } else {
            Notification.show("No old images found.");
        }
    }

    @Override
    protected void onAttach(AttachEvent attachEvent) {
        refreshGallery();
    }


    public void createHeader() {
        H1 title = new H1("Weld IT");
        title.getStyle().set("margin", "0").set("font-size", "var(--lumo-font-size-l)");
        // Menyvalgene
        // RouterLink home = new RouterLink("Hjem", Home.class);
        Image imga = new Image("icons/logo.png", "logo");
        imga.setWidth("40px");
        imga.addClickListener(click -> {
            UI.getCurrent().getPage().setLocation("home");
        });

        Button skille = new Button("*");
        skille.setWidth("10px");
        Button home = new Button("Home");
        home.setWidth("40px");
        home.addClickListener(click -> {
            UI.getCurrent().getPage().setLocation("home");
        });

        menuBar = new HorizontalLayout(imga, home);

    }

/*
    private void toggleEraser() {
        eraserMode = !eraserMode;
        UI.getCurrent().getPage().executeJs("""
        const svg = document.getElementById("main-canvas");
        if (!svg) return;

        if ($0) {
            svg.style.cursor = "crosshair";
            svg.addEventListener("click", eraserHandler);
        } else {
            svg.style.cursor = "default";
            svg.removeEventListener("click", eraserHandler);
        }

        function eraserHandler(e) {
            const target = e.target;
            if (target && target.closest("g") && target.closest("g").id === "active-svg") {
                target.remove();
            }
        }
    """, eraserMode);
    }


 */


    private void toggleEraser() {
        eraserActive = !eraserActive;
        if (eraserActive) {
            UI.getCurrent().getPage().executeJs("""
                        const svg = document.getElementById('svgCanvas');
                        if (!svg) return;
                    
                        svg.style.cursor = 'crosshair';
                    
                        window.eraserClickHandler = function (e) {
                            if (e.target && e.target.tagName !== 'svg' && e.target.id !== 'zoomGroup') {
                                e.target.remove();
                            }
                        };
                    
                        svg.addEventListener('click', window.eraserClickHandler);
                    """);
        } else {
            UI.getCurrent().getPage().executeJs("""
                        const svg = document.getElementById('svgCanvas');
                        if (!svg) return;
                    
                        svg.style.cursor = 'default';
                        if (window.eraserClickHandler) {
                            svg.removeEventListener('click', window.eraserClickHandler);
                            window.eraserClickHandler = null;
                        }
                    """);
        }
    }

    public void saveFile(String first, String last, String content)  {

        Random generator = new Random();
        int index = 100 + generator.nextInt(90);    // vilkårlig 3 sifret tall
        String folderPath = System.getProperty("user.home") + File.separator + "svgStorage";
     //   new Directory();
        String fi = generateFilename();
        String filName = folderPath + File.separator + last + "_" + fi + ".svg";
        boolean utvid = false;

        try (PrintWriter printWriter = new PrintWriter(
                new OutputStreamWriter(
                        new FileOutputStream(filName, utvid),
                        StandardCharsets.UTF_8))) {

            printWriter.print(content);

        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    private String generateFilename() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("ddMMyyyyHHmmss");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }

}

