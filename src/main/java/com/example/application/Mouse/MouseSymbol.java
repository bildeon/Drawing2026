package com.example.application.Mouse;

import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;

import java.awt.*;
import java.util.ArrayList;

/**
 * Find location for a welding symbol

 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */
public class MouseSymbol {
    private Point firstPointNew = new Point();
    //   public ArrayList<ExtraSymbol> symbolList = new ArrayList<>();
    private  ArrayList<WeldPoint> weldList = new ArrayList<>();
    private   Point middlePointNew = new Point();
    private     Point lastPointNew = new Point();

    private    Point textPointNew = new Point();
    private String ident;
    private int index;
    private String atext;
    private   int identificator ;
    private    boolean punktPlottes = false;
    private boolean textPlottes = true;
    private   int type = 0;
    private   int indi;
    private   String plotType = CalcUser.getPlotType();

    private  int[] gang = new int[25];

    /**
     * Find location for a welding symbol
     * @param textPointNew
     *
     * @author Erik Andreas Vold -  erikvold84@gmail.com
     */
    public MouseSymbol(Point textPointNew) {
        gang = CalcValues.getGang();
        this.textPointNew = textPointNew;
        //   System.out.println("MouseSymbol  " + textPointNew);
        atext = "20";
        firstPointNew.x = 0;
        firstPointNew.y = 0;
        middlePointNew.x = 0;
        middlePointNew.y = 0;
        lastPointNew.x = 0;
        lastPointNew.y = 0;
   //     System.out.println("inn mouseSymbol ");
        var can = new CalcValues();
        int ind = CalcBase.getStartValue() + 1;

        if (ind > 122 ) {
            CalcBase.setStartValue(65);
        }
        this.identificator = CalcBase.getStartValue() + 1;
        CalcBase.setStartValue(identificator);
        char kl = (char) identificator;
        String identifi = "." + kl;
        int type = gang[2];
        //System.out.println(" tttt " + kl );
        index = 0;
        atext = "0";
        int code = 2;
        String svgTab = "";
        int indi = CalcBase.getPlotIndicator();
        this.weldList = CalcValues.getWeldList();
        String user = CalcValues.getUserID();
   //     WeldPoint punkt1 = new WeldPoint(firstPointNew, middlePointNew, lastPointNew,textPointNew,identifi, punktPlottes,textPlottes, type,plotType, index, atext, code, indi, user, svgTab);
        weldList.add(0, new WeldPoint(firstPointNew, middlePointNew, lastPointNew,textPointNew,identifi, punktPlottes,textPlottes, type,plotType, index, atext, code, indi, user, svgTab));
  //        System.out.println("MouseSymbol  " + weldList.size() + "  " +  identifi);
        CalcValues.setWeldList(weldList);
        new DrawWeldingSymbol();
        // new DrawWeldinnString();


    }
}




