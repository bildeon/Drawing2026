package com.example.application.images;



import com.example.application.app.BezierDataHandler;
import com.example.application.under.WeldPoint;
import com.example.application.views.list.*;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import java.util.ArrayList;

@AnonymousAllowed
@Route(value = "movenew" , layout = MainLayoutDraw.class)

public class BezierViewNew extends VerticalLayout {

    private  int cx1 ;
    private   int cx2 ;
    private  int cx3 ;
    private  int cx4 ;
    private   int cy1 ;
    private   int cy2 ;
    private   int cy3 ;
    private   int cy4 ;
    private  int width = 1200;
    private    int height = 900;
    private  String movingCurve;
    private   int r = 3;
    private  ArrayList<WeldPoint> weldList = new ArrayList<>();
    private  WeldPoint tester = new WeldPoint();
    private  int foundIndex;
    private  int enterType;



    public BezierViewNew() {
        this.foundIndex = foundIndex;
        this.tester = tester;
        this.enterType = enterType;
        this.cx1 = 100;
        this.cy1 = 100;
        this.cx2 = 200;
        this.cy2 = 200;
        this.cx3 = 300;
        this.cy3 = 300;
        this.cx4 = 400;
        this.cy4 = 400;
        this.weldList = CalcValues.getWeldList();
        System.out.println(" hei " + enterType + "  " + weldList.size());
        //  tester = weldList.get(foundIndex);

        movingCurve = "<svg id='bezier-svg' width='" + width + "' height='" + height + "'>" +
                "  <path id='curve' d='M " + cx1 + "  " + cy1 + " Q " + cx2 + "  " + cy2 + ", " + cx3 + "  " + cy3 + "' stroke='black' fill='transparent'/>" +
                "  <circle cx='" + cx1 + "' cy='" + cy1 + "' r='" + r + "' fill='red' class='end-point' style='cursor: pointer;'/>" +
                "  <circle cx='" + cx2 + "' cy='" + cy2 + "' r='" + r + "' fill='blue' class='control-point' style='cursor: pointer;'/>" +
                "  <circle cx='" + cx3 + "' cy='" + cy3 + "' r='" + r + "' fill='red' class='end-point' style='cursor: pointer;'/>";

        // Opprett SVG-elementet   "  " +
        Div svgContainer = new Div();
        svgContainer.getElement().setProperty("innerHTML", movingCurve + CalcBase.getOutSvg()+ CalcBase.getSvgNew()+ CalcBase.getSvgBuffer());

        System.out.println(movingCurve);
        // Legg til SVG-elementet i UI
        add(svgContainer);

        // Kjør JavaScript-koden etter at komponenten er festet
        this.getElement().executeJs(
                "console.log('JavaScript-koden er utført');" +
                        "let activePoint = null;" +
                        "let dragging = false;" +
                        "const svg = document.getElementById('bezier-svg');" +

                        "if (svg) {" +
                        "  const points = svg.querySelectorAll('circle');" +
                        "  console.log('Antall punkter funnet:', points.length);" +
                        "  points.forEach(point => {" +
                        "    console.log('Legger til hendelse på punkt:', point);" +
                        "    point.addEventListener('mousedown', startDrag);" +
                        "  });" +

                        "  svg.addEventListener('mousemove', drag);" +
                        "  svg.addEventListener('mouseup', endDrag);" +

                        "  function getMousePosition(event) {" +
                        "    let svgRect = svg.getBoundingClientRect();" +
                        "    return {" +
                        "      x: event.clientX - svgRect.left," +
                        "      y: event.clientY - svgRect.top" +
                        "    };" +
                        "  }" +

                        "  function startDrag(event) {" +
                        "    console.log('Mousedown på punkt:', event.target);" +
                        "    if (event.target.tagName.toLowerCase() === 'circle') {" +
                        "      activePoint = event.target;" +
                        "      activePoint.style.cursor = 'grabbing';" +
                        "      dragging = true;" +
                        "      event.preventDefault();" +
                        "    }" +
                        "  }" +

                        "  function drag(event) {" +
                        "    if (dragging && activePoint) {" +
                        "      const pos = getMousePosition(event);" +
                        "      console.log('Flytter punkt til:', pos.x, pos.y);" +
                        "      activePoint.setAttribute('cx', pos.x);" +
                        "      activePoint.setAttribute('cy', pos.y);" +
                        "      updateCurve();" +
                        "      event.preventDefault();" +
                        "    }" +
                        "  }" +

                        "  function endDrag() {" +
                        "    if (dragging && activePoint) {" +
                        "      console.log('Museknapp sluppet på punkt');" +
                        "      activePoint.style.cursor = 'pointer';" +
                        "      dragging = false;" +
                        "      sendUpdatedPointsToServer();" +
                        "      activePoint = null;" +
                        "    }" +
                        "  }" +

                        "  function updateCurve() {" +
                        "    const startPoint = svg.querySelectorAll('.end-point')[0];" +
                        "    const controlPoint = svg.querySelector('.control-point');" +
                        "    const endPoint = svg.querySelectorAll('.end-point')[1];" +
                        "    const curve = document.getElementById('curve');" +
                        "    const startX = startPoint.getAttribute('cx');" +
                        "    const startY = startPoint.getAttribute('cy');" +
                        "    const controlX = controlPoint.getAttribute('cx');" +
                        "    const controlY = controlPoint.getAttribute('cy');" +
                        "    const endX = endPoint.getAttribute('cx');" +
                        "    const endY = endPoint.getAttribute('cy');" +
                        "    const d = `M ${startX} ${startY} Q ${controlX} ${controlY}, ${endX} ${endY}`;" +
                        "    curve.setAttribute('d', d);" +
                        "  }" +

                        "  function sendUpdatedPointsToServer() {" +
                        "    const points = Array.from(svg.querySelectorAll('circle'));" +
                        "    const data = points.map(point => ({ cx: point.getAttribute('cx'), cy: point.getAttribute('cy') }));" +
                        "    console.log('Sender oppdaterte punkter til server:', data);" +
                        "    $0.$server.updateCurvePoints(JSON.stringify(data));" +  // $0 refererer nå til BezierView
                        "  }" +
                        "} else {" +
                        "  console.error('SVG-elementet ble ikke funnet');" +
                        "}"
        );
    }

    // Backend-metode som tar imot data fra JavaScript
    @ClientCallable
    public void updateCurvePoints(String jsonData) {
        // Behandle de oppdaterte punktene fra frontend
        //   System.out.println("Oppdaterte punkter: " + jsonData);
        //   System.out.println(movingCurve);
        // Eksempel på å sende punktene videre til en annen klasse for videre prosessering
        BezierDataHandler.processCurvePoints(jsonData);
    }
}



