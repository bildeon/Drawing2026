package com.example.application.Mouse;




import com.example.application.under.ExtraBue;
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
@Route(value = "mousebue" , layout = MainLayoutDraw.class)
@PageTitle("Weld IT AS - Drawing line ")

public class MouseBue {
    private  String user;
    private ArrayList<WeldPoint> weldList = new ArrayList<>();
    private Point[] firstPointNew = new Point[100];;
    private    Point[] middlePointNew = new Point[100];
    private    Point[] lastPointNew = new Point[100];;
    private    Point[] textPointNew = new Point[100];
    private String svgTab;
    private  int index;
    private String atext;
    private     boolean textPlottes = true;
    private     boolean punktPlottes = true;
    private int type = 0;
    private int indi;
    private String plotType = "";

    private String identifi;
    private  ArrayList<ExtraBue> weldBue = new ArrayList<ExtraBue>();

    private  static WeldPoint tester = new WeldPoint();
    private ExtraBue el = new ExtraBue();
    private  int[] gang = new int[25];
   private int code;


    public MouseBue() {
        gang = CalcValues.getGang();
        type = gang[2];
        index = 0;

        atext = "0";
        code = 3;
        identifi = ".";

        atext = "";
        code = 1;

        this.plotType = CalcUser.getPlotType();
        indi = CalcBase.getPlotIndicator();
        this.weldList = CalcValues.getWeldList();
        this.weldBue =CalcValues.getWeldBue();
        user = CalcValues.getUserID();
        svgTab = " ";
        int h = this.weldBue.size();
        for (int f=h-1; f>= 0 ; f--) {              //   for (int f=0; f<h ; f++) {
            el = this.weldBue.get(f);
            int indx = CalcBase.getNumberOfSymbols()+1;
            CalcBase.setNumberOfSymbols(indx);
            identifi = "" + indx;
            firstPointNew[f] = new Point();
            lastPointNew[f] = new Point();
            middlePointNew[f]  = new Point();
            textPointNew[f]  = new Point();
            firstPointNew[f].x = el.getFirstX();
            firstPointNew[f].y = el.getFirstY();
            lastPointNew[f].x = el.getFirstZ();
            lastPointNew[f].y = el.getLastZ();
            middlePointNew[f].x = el.getLastX();
            middlePointNew[f].y = el.getLastY();
            textPointNew[f].x = (el.getFirstX() +el.getFirstZ() )/2;
            textPointNew[f].y = (el.getFirstY()+el.getLastZ())/2;

            this.weldList.add(  new WeldPoint(firstPointNew[f], middlePointNew[f], lastPointNew[f], textPointNew[f], identifi, punktPlottes, textPlottes, type, plotType, index, atext, code, indi, user, svgTab));
        }
        int hl = weldBue.size();
        for (int j = hl-1; j >= 0; j--) {
            weldBue.remove(j);
        }
        CalcValues.setWeldBue(weldBue);
        CalcValues.setWeldList( this.weldList);
        new DrawWeldinnString();
    }

}











