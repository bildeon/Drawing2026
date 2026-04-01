package com.example.application.Mouse;

import com.example.application.html.ActualString;
import com.example.application.under.ExtraTall;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.router.Route;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Route("possible")
public class MakeMovePossible {
    private List<ExtraTall> extraTall = new ArrayList<>();
    private  List<ExtraTall> extraTallTegn = new ArrayList<>();
    private ArrayList<WeldPoint> weldList = new ArrayList<WeldPoint>();
    private   Point firstPointNew = new Point();
    private    Point middelPointNew = new Point();
    private   Point lastPointNew = new Point();
    private   int index = 0;
    private   int code = 2;
    private  int[] gang = new int[25];
    private    Boolean punktPlottes = false;
    private    Boolean textPlottes = true;
    private    int type = gang[2];
    private   String plotType = CalcUser.getPlotType();
    private    String atext = "100";
    private    int indicator ;
    private String svgTab ;
    private    String user = CalcValues.getUserID();

    public  MakeMovePossible() {
   //     System.out.println("inn MakMovePossible ");
        firstPointNew.x = 0;
        middelPointNew.x = 0;
        lastPointNew.x = 0;
        firstPointNew.y = 0;
        middelPointNew.y = 0;
        lastPointNew.y = 0;
        weldList = CalcValues.getWeldList();
        indicator = CalcBase.getPlotIndicator();
        extraTallTegn = CalcValues.getExtraTallTegn();
        extraTall = CalcValues.getExtraTall();
        gang = CalcValues.getGang();
        for ( int i = 0; i < extraTallTegn.size(); i++) {
            Point textPoint = new Point();
            ExtraTall tester = new ExtraTall();
            tester = extraTallTegn.get(i);
            textPoint.x = tester.getFirstX();
            textPoint.y = tester.getFirstY();
       //     String identifi = "." + tester.getLastString();
            String identifi =  tester.getLastString();
          weldList.add(0, new WeldPoint(firstPointNew, middelPointNew, lastPointNew,new Point(textPoint.x, textPoint.y),identifi, punktPlottes,textPlottes, type,plotType, index, atext, code, indicator, user, svgTab));

            CalcValues.setWeldList(weldList);

        }
        for ( int i = 0; i < extraTall.size(); i++) {
            Point textPoint = new Point();
            ExtraTall tester = new ExtraTall();
            tester = extraTall.get(i);
            textPoint.x = tester.getFirstX();
            textPoint.y = tester.getFirstY();
            String identifi =  tester.getLastString();

          weldList.add(0, new WeldPoint(firstPointNew, middelPointNew, lastPointNew,textPoint,identifi, punktPlottes,textPlottes, type,plotType, index, atext, code, indicator, user, svgTab));

            CalcValues.setWeldList(weldList);

        }
     //   new MouseSymbol();
    //    new ActualString();
    //    new DrawWeldinnString();
   //     final var drawWeldingSymbol = new DrawWeldingSymbol();
  //      System.out.println(indicator);

    }
}
