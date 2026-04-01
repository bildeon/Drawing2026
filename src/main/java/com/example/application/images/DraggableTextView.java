package com.example.application.images;



import com.example.application.Mouse.MouseMoved;
import com.example.application.under.ExtraComment;
import com.example.application.views.list.*;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import java.util.ArrayList;
import java.util.List;

@AnonymousAllowed
@Route(value = "movertext" , layout = MainLayoutDraw.class)
@PageTitle("Weld IT AS - Drawing welding string")
public class DraggableTextView extends VerticalLayout {

    private Div draggableText;

    private  ExtraComment test;
    private   int enterType;
    private   int cx4;
    private   int cy4;
    private    String testTall;
    private static List<ExtraComment> extraComment = new ArrayList<>();
    public DraggableTextView() {
        extraComment = CalcValues.getExtraComment();
        this.test =  extraComment.get(0);
        this.enterType = MouseMoved.getEnterTypeNew();// 5 for Comment
        //     this.weldList = CalcValues.weldList;

        cx4 = test.getFirstX();
        cy4 = test.getFirstY();
        testTall = test.getLastString();
        System.out.println("vi er her move   " + cx4 + "  " + cy4  + " " + testTall);




        // Lag en Div-komponent med tekst
        Div draggable = new Div();


        draggable.getElement().setProperty("innerHTML", CalcBase.getOutSvg()+ CalcBase.getSvgNew()+ CalcBase.getSvgBuffer());

        // Legg til SVG-elementet i UI
        add(draggable);

        draggableText = new Div();
        draggableText.setText( "moving");
        draggableText.setId("draggableText");
        draggableText.getStyle().set("position", "absolute");
        draggableText.getStyle().set("left", "100px");
        draggableText.getStyle().set("top", "100px");
        draggableText.getStyle().set("cursor", "grab");
        draggableText.setWidth("150px");

        // Legg til JavaScript for å gjøre den flyttbar
        getElement().executeJs(
                """
                const text = document.getElementById('draggableText');
                text.addEventListener('mousedown', (e) => {
                    const onMouseMove = (event) => {
                        text.style.left = event.pageX + 'px';
                        text.style.top = event.pageY + 'px';
                    };
                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', () => {
                        document.removeEventListener('mousemove', onMouseMove);
                        // Kall Java-metoden for å sende ny posisjon til serveren
                        $0.$server.updatePosition(text.style.left, text.style.top);
                    }, { once: true });
                });
                """,
                getElement()
        );

        // Legg til komponenten i layoutet
        add(draggableText);
    }

    // Server-side metode for å oppdatere posisjon
    @ClientCallable
    public void updatePosition(String left, String top) {
    //    System.out.println("Ny posisjon: left=" + left + ", top=" + top);
        int x = Integer.parseInt(left);
        int y = Integer.parseInt(top);

        test.setFirstX(x);
        test.setFirstY(y);
        extraComment.set(0,test);
        CalcValues.setExtraComment(extraComment);
        // Her kan du lagre den nye posisjonen i en database eller annen logikk
    }
}


