package com.example.application.Mouse;


import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcValues;

import java.awt.*;
import java.util.ArrayList;
/**
 * Give a new welding point inn to system
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */
public class MousDraw {
    private    Point firstPointNew = new Point();
    private  Point middelPointNew = new Point();
    private   Point lastPointNew = new Point();
    private ArrayList<WeldPoint> weldList = new ArrayList<>();
    private   Point textPointNew = new Point();
    private    String ident;

    public MousDraw(Point firstPointNew, Point middelPointNew, Point lastPointNew, Point textPointNew, String ident) {
        this.firstPointNew = firstPointNew;
        this.middelPointNew = middelPointNew;
        this.lastPointNew = lastPointNew;
        this.textPointNew = textPointNew;
        this.ident = ident;


        this.weldList = CalcValues.getWeldList();


        new DrawWeldinnString();


    }
}



