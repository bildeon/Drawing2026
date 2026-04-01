package com.example.application.Mouse;



import com.example.application.under.ExtraLine;
import com.example.application.under.WeldPoint;
import com.example.application.views.list.*;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;


import java.awt.*;
import java.util.ArrayList;

/**
 * Moving an old point to new point after locating it
 *
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */
@AnonymousAllowed
@Route(value = "mouseline" , layout = MainLayoutDraw.class)
@PageTitle("Weld IT AS - Drawing line ")

public class MouseLine {
    private   String user;
    private ArrayList<WeldPoint> weldList = new ArrayList<>();
    private    Point[] firstPointNew = new Point[10];;
    private    Point[] middlePointNew = new Point[10];
    private    Point[] lastPointNew = new Point[10];;
    private     Point[] textPointNew = new Point[10];
    private     String svgTab;
    private int index;
    private String atext;
    private     boolean punktPlottes = true;
    private     boolean textPlottes = true;
    private     int type = 0;
    private    int indi;
    private    String plotType = "";

    private    String identifi;
    private    ArrayList<ExtraLine> weldStroke = new ArrayList<ExtraLine>();
    private  int[] gang = new int[25];
    private WeldPoint tester = new WeldPoint();
    private    ExtraLine el = new ExtraLine();

    private int code;
    public MouseLine() {

        gang = CalcValues.getGang();

        type = gang[2];
        index = 0;
        atext = "0";
        code = 3;
        identifi = ".";
        this.plotType = CalcUser.getPlotType();
        indi = CalcBase.getPlotIndicator();
        this.weldList = CalcValues.getWeldList();
        this.weldStroke = CalcValues.getWeldStroke();
        user = CalcValues.getUserID();
        svgTab = " ";
        int h = this.weldStroke.size();
        for (int f=0; f<h ; f++) {
            el = this.weldStroke.get(f);
            firstPointNew[f] = new Point();
            lastPointNew[f] = new Point();
            middlePointNew[f]  = new Point();
            textPointNew[f]  = new Point();
            firstPointNew[f].x = el.getFirstX();
            firstPointNew[f].y = el.getFirstY();
            lastPointNew[f].x = el.getLastX();
            lastPointNew[f].y = el.getLastY();
            middlePointNew[f].x = (firstPointNew[f].x + lastPointNew[f].x) / 2;
            middlePointNew[f].y = (firstPointNew[f].y + lastPointNew[f].y) / 2;
            textPointNew[f].x = 0;
            textPointNew[f].y = 0;
            this.weldList.add(  new WeldPoint(firstPointNew[f], middlePointNew[f], lastPointNew[f], textPointNew[f], identifi, punktPlottes, textPlottes, type, plotType, index, atext, code, indi, user, svgTab));
        }
        int hl = weldStroke.size();
        for (int j = hl-1; j >= 0; j--) {
            weldStroke.remove(j);
        }
        CalcValues.setWeldStroke(weldStroke);
        CalcValues.setWeldList(this.weldList);
        new DrawWeldinnString();
    }

}









