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
@Route(value = "mousecut" , layout = MainLayoutDraw.class)
@PageTitle("Weld IT AS - Drawing line ")

public class MouseCut {
    private  ArrayList<WeldPoint> weldList = new ArrayList<>();
    private Point[] firstPointNew = new Point[10];
    private Point[] middlePointNew = new Point[10];
    private  Point[] lastPointNew = new Point[10];;
    private  Point[] textPointNew = new Point[10];
    private String svgTab;
    private int index;
    private String atext;
    private  boolean punktPlottes = true;
    private boolean textPlottes = true;
    private int type = 0;
    private  int indi;
    private String plotType = "";
    private String identifi;
    private ArrayList<ExtraLine> weldCut = new ArrayList<ExtraLine>();
    private  static WeldPoint tester = new WeldPoint();
    private ExtraLine el = new ExtraLine();
    private String user = CalcValues.getUserID();
    private int code;

    private  int[] gang = new int[25];

    public MouseCut() {
        gang = CalcValues.getGang();
        type = gang[2];
        index = 0;
        atext = "0";
        code = 3;
        identifi = ".";
        this.plotType = CalcUser.getPlotType();
        indi = CalcBase.getPlotIndicator();
        this.weldList = CalcValues.getWeldList();
        this.weldCut = CalcValues.getWeldCut();
        user = CalcValues.getUserID();
        svgTab = " ";
        int h = this.weldCut.size();
        for (int f=0; f<h ; f++) {
            el = this.weldCut.get(f);
            firstPointNew[f] = new Point();
            lastPointNew[f] = new Point();
            middlePointNew[f]  = new Point();
            textPointNew[f]  = new Point();
            firstPointNew[f].x = el.getFirstX();
            firstPointNew[f].y = el.getFirstY();
            lastPointNew[f].x = el.getLastX();
            lastPointNew[f].y = el.getLastY();
            middlePointNew[f].x = firstPointNew[f].x ;
            middlePointNew[f].y = firstPointNew[f].y ;
            textPointNew[f].x = 0;
            textPointNew[f].y = 0;
            this.weldList.add(  new WeldPoint(firstPointNew[f], middlePointNew[f], lastPointNew[f], textPointNew[f], identifi, punktPlottes, textPlottes, type, plotType, index, atext, code, indi, user, svgTab));
        }
        int hl = weldCut.size();
        for (int j = hl-1; j >= 0; j--) {
            weldCut.remove(j);
        }
    //    System.out.println(weldList.size() + "   "  +  CalcValues.getWeldList().size());
        CalcValues.setWeldStroke(weldCut);
        CalcValues.setWeldList(this.weldList);
        new DrawWeldinnString();
    }

}




