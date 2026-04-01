package com.example.application.images;

import com.example.application.Mouse.DrawWeldingSymbol;
import com.example.application.Mouse.DrawWeldinnString;
import com.example.application.under.WeldPoint;
import com.example.application.views.list.*;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.example.application.Mouse.MouseMoved;

import java.awt.*;
import java.util.ArrayList;


@AnonymousAllowed
@Route(value = "placing")
public class BezierPlacing  extends VerticalLayout {

    private Boolean entered;
    private  ArrayList<WeldPoint> weldList = new ArrayList<>();
    private  WeldPoint tester = new WeldPoint();
    private  int enterTypeNew;
    private  int code;
    private  int[] telleValue = new int[8];
    private Point point = new Point();
    private  Point firstPointNew = new Point();
    private Point lastPointNew = new Point();
    private Point middelPointNew = new Point();
    private Point textPoint = new Point();

    public BezierPlacing() {
 //       System.out.println("enter BezierPlacing  ");
        this.telleValue =MouseMoved.getTelleValue();
        this.tester = MouseMoved.getTester();
        this.enterTypeNew = MouseMoved.getEnterTypeNew();
        this.weldList = CalcValues.getWeldList();

        firstPointNew.x = telleValue[0];
        firstPointNew.y = telleValue[1];
        middelPointNew.x = telleValue[2];
        middelPointNew.y = telleValue[3];
        lastPointNew.x = telleValue[4];
        lastPointNew.y = telleValue[5];
        textPoint.x = telleValue[6];
        textPoint.y = telleValue[7];

        code = tester.getCode();
        //System.out.println("  code =  " + code);
        tester.setWeldPointFirst(firstPointNew);
        tester.setWeldPointLast(lastPointNew);
        tester.setWeldPointMiddel(middelPointNew);
        tester.setWeldPointTextPoint(textPoint);


        int foundIndex = weldList.size();
        weldList.add(foundIndex, tester);   // setter inn nye verdier
        CalcValues.setWeldList(weldList);   // setter inn nye verdier
        /*
        System.out.println("enter BezierPlacing  ");
    for (int i=0; i<8; i++) {


        System.out.println( telleValue[i] );
    }

         */
        if ( code == 2 ) {
            new DrawWeldingSymbol();
        } else {
            new DrawWeldinnString();
        }


    }
}

