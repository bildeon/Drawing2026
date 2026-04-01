package com.example.application.menu;
import com.example.application.Mouse.ChangePlot2;
import com.example.application.Mouse.DrawWeldingSymbol;
import com.example.application.Mouse.MouseSymbol;
import com.example.application.html.EmptyString;
import com.example.application.Mouse.ChangePlot3;
import com.example.application.html.ThymeleafExampleView;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinSession;

@Route("zoomimage")
public class ZoomImage extends AppLayout {   //  extends AppLayout
    private  double zoom;
    private  int[] gang = new int[25];
    private int[] bufferId = new int[10];
    public ZoomImage() {

        UI ui = UI.getCurrent();
        VaadinSession session = VaadinSession.getCurrent();
        String tenantId = (String) session.getAttribute("tenantId");
        String userId   = (String) session.getAttribute("userId");
        if (tenantId == null || tenantId.isBlank() || userId == null || userId.isBlank()) {
           UI.getCurrent().getPage().setLocation("accessdenied");
            return;
        }



        gang = CalcValues.getGang();

        bufferId = CalcUser.getBufferId();
        CalcBase.setValgIndeks(4);
        zoom= 4.0/3.0;
        createHeader();

        Div svgContainer = new Div();
        String movingCurve = "<svg id='svgCanvas' width='1800' height='1290' viewBox = '0 0 1200 860' style='border:1px solid black;'>"
                + "<g id='zoomGroup'>"; // Legg til en gruppe for zooming
        svgContainer.getElement().setProperty("innerHTML", movingCurve + CalcBase.getStartSvg() +CalcBase.getSvgNew()+ CalcBase.getSvgBuffer()
                + "</g></svg>");

        HorizontalLayout content = new HorizontalLayout();

        UI.getCurrent().getPage().executeJs(
                "let zoomGroup = document.getElementById('svgCanvas');" +
                        "if (zoomGroup) {" +
                        "    zoomGroup.setAttribute('transform', 'scale(' + $0 + ')');" +
                        "} else {" +
                        "    console.error('Element med ID zoomGroup ikke funnet!');" +
                        "}", zoom);

        content.add(svgContainer);
        setContent(content);
    }

    private void createHeader() {
      H1 title = new H1("Weld IT");
      title.getStyle().set("margin", "0").set("font-size", "var(--lumo-font-size-l)");
        // Menyvalgene
        // RouterLink home = new RouterLink("Hjem", Home.class);
        Image imga = new Image("icons/logo.png", "logo");
        imga.setWidth("40px");
        imga.addClickListener(click -> { UI.getCurrent().getPage().setLocation("home");} );

        Button skille = new Button("*");
        skille.setWidth("10px");

        Button home =new Button("Home");
        home.setWidth("40px");
        home.addClickListener(click -> { UI.getCurrent().getPage().setLocation("home");} );

        Button myButton = new Button("Finished zooming");
        myButton.addClassName("my-button");
        myButton.addClickListener(click -> { UI.getCurrent().getPage().setLocation("Image");} );

        Button     myButttonDraw = new Button("Draw");
        myButttonDraw.addClassName("my-button");
        myButttonDraw.addClickListener(click -> { UI.getCurrent().getPage().setLocation("zoomimage0"); } );

        Button     myButttonLU = new Button("Left upper");
        myButttonLU.addClassName("my-button");
        myButttonLU.addClickListener(click -> {CalcBase.setPlacing(1); } );

        Button     myButttonRU = new Button("Right  upper");
        myButttonRU.addClassName("my-button");
        myButttonRU.addClickListener(click -> { CalcBase.setPlacing(2);} );

        Button     myButttonLL = new Button("Left  lower");
        myButttonLL.addClassName("my-button");
        myButttonLL.addClickListener(click -> { CalcBase.setPlacing(3); } );

        Button     myButttonRL = new Button("Right lower");
        myButttonRL.addClassName("my-button");
        myButttonRL.addClickListener(click -> { CalcBase.setPlacing(4);} );

        Button     myButttonC = new Button("Center");
        myButttonC.addClassName("my-button");
        myButttonC.addClickListener(click -> {CalcBase.setPlacing(0); } );

        Button     myTransfer = new Button("Save");
        myTransfer.addClassName("my-button");
        myTransfer.addClickListener(click -> {
         //   new MouseSymbol(textPoint);
            UI.getCurrent().getPage().setLocation("base");
        } );

        Button     myIdent = new Button("New name");
        myIdent.addClassName("my-button");
        myIdent.addClickListener(click -> { UI.getCurrent().getPage().setLocation("NewIdent"); } );

        Button     mySymbol = new Button("Weld symbol");
        mySymbol.addClassName("my-button");
        mySymbol.addClickListener(click -> {
            UI.getCurrent().getPage().setLocation("symbol");
    //    new DrawWeldingSymbol();
        } );

        Button myButtonMove = new Button("Move" );
        myButtonMove.addClassName("my-button");
        myButtonMove.addClickListener(click -> { UI.getCurrent().getPage().setLocation("zoomimage4"); } );

        myButton = new Button("Move symbol");
        myButton.addClassName("my-button");
        myButton.addClickListener(click -> {  UI.getCurrent().getPage().setLocation("zoomimage4S"); } );

        Button myButtonDelete = new Button("Delete");
        myButtonDelete.addClassName("my-button");
        myButtonDelete.addClickListener(click -> { UI.getCurrent().getPage().setLocation("zoomimage2");  } );

        Button myButtonText = new Button("Text");
        myButtonText.addClassName("my-button");
        myButtonText.addClickListener(click -> { UI.getCurrent().getPage().setLocation("zoomimage6");  } );

        Button myButtonZoom = new Button("Zooming Up");
        myButtonZoom.addClassName("my-button");
        myButtonZoom.addClickListener(click -> {
         //   CalcValues.zoomIndex = 1.4;
            UI.getCurrent().getPage().setLocation("zoommenue");} );

        Button myButtonSymbol = new Button("Symbol");
        myButtonSymbol.addClassName("my-button");
        myButtonSymbol.addClickListener(click -> { UI.getCurrent().getPage().setLocation("zoomimage3");  } );

        Button myButtonLine = new Button("Line");
        myButtonLine.addClassName("my-button");
        myButtonLine.addClickListener(click -> {  UI.getCurrent().getPage().setLocation("zoomimage1"); } );

        Button myButtonCut = new Button("Cut");
        myButtonCut.addClassName("my-button");
        myButtonCut.addClickListener(click -> {  UI.getCurrent().getPage().setLocation("zoomimagecut"); } );

        Button myButtonPlace1 = new Button("Buffer#1");
        myButtonPlace1.addClassName("my-button");
        myButtonPlace1.addClickListener(click -> {
            CalcBase.setPlacing(1);
            CalcUser.setPlotModell(CalcBase.getPlacing());
            CalcBase.setZoomIndex(1.4);
            CalcBase.setValgIndeks(1);
            int oldPlotIndicator = CalcBase.getPlotIndicator();
            bufferId[1] = oldPlotIndicator;
            CalcUser.setBufferId(bufferId);
            //  System.out.println("zoomimage før " + "  "  +  CalcValues.svgNew);
         //   CalcValues.svgNew = "";
            new ChangePlot3(CalcUser.getPlotModell(),oldPlotIndicator);
        //    System.out.println("zoomimage etter: \n " + "  "  +  CalcValues.svgBuffer);
       //     System.out.println("retur zoomimage ");
       //     UI.getCurrent().getPage().setLocation("/thymeleaf-example");
       //     System.out.println("retur apsolutt thymeleaf");
       //     UI.getCurrent().getPage().setLocation("/thymeleaf-example");
            new ThymeleafExampleView();

     //       UI.getCurrent().getPage().setLocation("zoomimageplacing");

        } );

        Button myButtonPlace2 = new Button("Buffer#2");
        myButtonPlace2.addClassName("my-button");
        myButtonPlace2.addClickListener(click -> {
            CalcBase.setPlacing(2);
            CalcUser.setPlotModell(CalcBase.getPlacing());
            CalcBase.setZoomIndex(1.4);
            CalcBase.setValgIndeks(1);
            int oldPlotIndicator = CalcBase.getPlotIndicator();
            bufferId[2] = oldPlotIndicator;
            CalcUser.setBufferId(bufferId);
            new ChangePlot3(CalcUser.getPlotModell(),oldPlotIndicator);
      //      UI.getCurrent().getPage().setLocation("/thymeleaf-example");
            new ThymeleafExampleView();

           //        UI.getCurrent().getPage().setLocation("zoomimageplacing");

        } );
        Button myButtonPlace3 = new Button("Buffer#3");
        myButtonPlace3.addClassName("my-button");
        myButtonPlace3.addClickListener(click -> {
            CalcBase.setPlacing(3);
            CalcUser.setPlotModell(CalcBase.getPlacing());
            CalcBase.setZoomIndex(1.4);
            CalcBase.setValgIndeks(1);
            int oldPlotIndicator = CalcBase.getPlotIndicator();
            bufferId[3] = oldPlotIndicator;
            CalcUser.setBufferId(bufferId);
            new ChangePlot3(CalcUser.getPlotModell(),oldPlotIndicator);
         //   UI.getCurrent().getPage().setLocation("/thymeleaf-example");

            new ThymeleafExampleView();
            //       UI.getCurrent().getPage().setLocation("zoomimageplacing");

        } );
        Button myButtonPlace4 = new Button("Buffer#4");
        myButtonPlace4.addClassName("my-button");
        myButtonPlace4.addClickListener(click -> {
            CalcBase.setPlacing(4);
            CalcUser.setPlotModell(CalcBase.getPlacing());
            CalcBase.setZoomIndex(1.4);
            CalcBase.setValgIndeks(1);
            int oldPlotIndicator = CalcBase.getPlotIndicator();
            bufferId[4] = oldPlotIndicator;
            CalcUser.setBufferId(bufferId);
            new ChangePlot3(CalcUser.getPlotModell(),oldPlotIndicator);
            new EmptyString();
       //     UI.getCurrent().getPage().setLocation("emptystring");
       //     UI.getCurrent().getPage().setLocation("/thymeleaf-example");

            new ThymeleafExampleView();
            //       UI.getCurrent().getPage().setLocation("zoomimageplacing");

        } );

        Button myButtonPlace34 = new Button("Buffer#3 + #4");
        myButtonPlace34.addClassName("my-button");
        myButtonPlace34.addClickListener(click -> {
            CalcBase.getPlacing();
            CalcUser.setPlotModell(CalcBase.getPlacing());
            CalcBase.setZoomIndex(2.8);
            CalcBase.setValgIndeks(1);
            int oldPlotIndicator = CalcBase.getPlotIndicator();
            bufferId[4] = oldPlotIndicator;
            bufferId[3] = oldPlotIndicator;
            CalcUser.setBufferId(bufferId);
            new ChangePlot3(CalcUser.getPlotModell(),oldPlotIndicator);
            new EmptyString();
       //     UI.getCurrent().getPage().setLocation("/thymeleaf-example");
            new ThymeleafExampleView();
        } );
        Button myButtonPlace0 = new Button("Normal size");
        myButtonPlace0.addClassName("my-button");
        myButtonPlace0.addClickListener(click -> {
            CalcBase.setPlacing(0);
            CalcUser.setPlotModell( CalcBase.getPlacing());
            CalcBase.setZoomIndex(1.4);
            CalcBase.setValgIndeks(1);
            int oldPlotIndicator = CalcBase.getPlotIndicator();
            bufferId[0] = oldPlotIndicator;
            CalcUser.setBufferId(bufferId);
            new ChangePlot3(CalcUser.getPlotModell(),oldPlotIndicator);
     //       UI.getCurrent().getPage().setLocation("/thymeleaf-example");
            new ThymeleafExampleView();

            //       UI.getCurrent().getPage().setLocation("zoomimageplacing");

        } );
        // Legg menyvalgene i en horisontal layout

        HorizontalLayout menuBar = new HorizontalLayout();
        /*
        if (gang[2] == 14) {
            menuBar = new HorizontalLayout(imga, home,  myButttonDraw,   myButtonMove ,  myButtonDelete , myButtonSymbol, myButtonLine ,
                    myIdent,  mySymbol, myButtonPlace0, myTransfer,myButtonCut );
        } else {
            if (CalcUser.getPlotType().equals("butt") || CalcUser.getPlotType().equals("Butt")) {
                menuBar = new HorizontalLayout(imga, home, myButttonDraw, myButtonMove, myButtonDelete, myButtonSymbol, myButtonLine,
                        myIdent,    mySymbol, myButtonZoom, myButtonPlace1, myButtonPlace2, myButtonPlace3, myButtonPlace4, myButtonPlace34, myTransfer, myButtonCut);
            } else {
                menuBar = new HorizontalLayout(imga, home, myButttonDraw, myButtonMove, myButtonDelete, myButtonSymbol, myButtonLine,
                        myIdent,     mySymbol, myButtonZoom, myButtonPlace1, myButtonPlace2, myButtonPlace3, myButtonPlace4, myTransfer, myButtonCut);
            }
        }


         */
        if (gang[2] == 14) {
            menuBar = new HorizontalLayout(imga, home,  myButttonDraw,   myButtonMove ,  myButtonDelete , myButtonSymbol, myButtonLine ,
                    myIdent,  mySymbol,  myTransfer,myButtonCut );
        } else {
            if (CalcUser.getPlotType().equals("butt") || CalcUser.getPlotType().equals("Butt")) {
                menuBar = new HorizontalLayout(imga, home, myButttonDraw, myButtonMove, myButtonDelete, myButtonSymbol, myButtonLine,
                        myIdent,    mySymbol, myButtonZoom,  myTransfer, myButtonCut);
            } else {
                menuBar = new HorizontalLayout(imga, home, myButttonDraw, myButtonMove, myButtonDelete, myButtonSymbol, myButtonLine,
                        myIdent,     mySymbol, myButtonZoom, myTransfer, myButtonCut);
            }
        }
        menuBar.setSpacing(true);
     //   HorizontalLayout menuBarAlter = new HorizontalLayout(imga,  myButttonDraw,   myButtonMove ,  myButtonDelete , myButtonSymbol, myButtonLine ,
     //         myButtonZoom );
    //    menuBarAlter.setSpacing(true);
        //   menuBar.getStyle().set("margin-left", "auto"); // Skyver menyen til høyre

        // Topplinje med tittel og meny
        HorizontalLayout header = new HorizontalLayout(title,  menuBar);
  //      HorizontalLayout     headerAlt = new HorizontalLayout(title, menuBarAlter);

        header.setWidthFull();
        header.setAlignItems(FlexComponent.Alignment.CENTER);
        header.setPadding(true);

     //   headerAlt.setWidthFull();
     //   headerAlt.setAlignItems(FlexComponent.Alignment.CENTER);
     //   headerAlt.setPadding(true);

        //      header.getStyle().set("background", "#333").set("color", "white");

        addToNavbar(header); // Legger det til i toppen
    }


}





