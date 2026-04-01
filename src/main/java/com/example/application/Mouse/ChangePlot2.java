package com.example.application.Mouse;


import com.example.application.html.svg;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;




/**
 * Generate string of svg kode for the actual weldPoint
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */

public class ChangePlot2 {
    private   Point resultPoint = new Point();

    private  int[] gang = new int[25];

    private    Point firstPoint = new Point();
    private    Point middelPoint = new Point();
    private    Point lastPoint = new Point();
    private     Point textPoint = new Point();
    private    String ident;
    private    boolean punktPlottes;
    private    boolean textPlottes;
    private    int numberWeld;
    private    int plotModus;
    private    WeldPoint tester = new WeldPoint();
    private    WeldPoint testerNew = new WeldPoint();
    private ArrayList<WeldPoint> weldList = new ArrayList<>();
    private ArrayList<WeldPoint> actualList = new ArrayList<>();
    private    String svgInnhold;
    private    String svgWeld;
    private  String user;
    private     int type;
    private   int indicator;
    private    String typePlot;
    private   List<String> svgStringWeld = new ArrayList<>();
    private    List<String> svgStringCircleFirst = new ArrayList<>();
    private    List<String> svgStringCircleLast = new ArrayList<>();
    private    List<String> svgStringCircleMiddel = new ArrayList<>();
    private   List<String> svgStringText = new ArrayList<>();
    private    int zoomStorage;
    private     double zoomIndex;
    private   double zoomNew;
    private    int newIndex;
    private     int oldPlotIndicator;
    private     int plotModell;
    private   int [] modellIndicator = new int[10];

    public ChangePlot2(int plotModus, int oldPlotIndicator) {
        this.oldPlotIndicator = oldPlotIndicator;
        this.modellIndicator = CalcValues.getModellIndicator();
        this.zoomStorage = CalcBase.getZoomStorage();
        this.plotModell = CalcUser.getPlotModell();
        this.zoomIndex = CalcBase.getZoomIndex();
        this.plotModus = plotModus;
        this.weldList = CalcValues.getWeldList();
        newIndex = 0;
        gang = CalcValues.getGang();
    //    System.out.println("inn ChangePlot2 " );
  //     System.out.println("stat2 subroutine2  zoomNew = " + zoomNew + "   newIndex =  " + newIndex + " plotModus =  " + plotModus + " plotModel = " + plotModell);
 //      System.out.println( this.zoomStorage + "  " +  this.zoomStorage + "  " +      this.zoomIndex + "  " + this.plotModus  );
       String outSvgNew;  // =  outSvg;
        var canv = new svg();
        canv.setColor("red");
        String svgStop = canv.svgEnd();

        int code;

        numberWeld = weldList.size();
        svgWeld = "";
   //     plotModell = 5;  // actual type
        //plotModus = 5;
   //     System.out.println("numberWeld=  " + numberWeld);
      //  if (plotModell == 5) CalcValues.gang[2] = 12;
//////////////////////////////////////////////////////////////////////////////////////////////
        for (int i = 0; i < numberWeld; i++) {
            tester = weldList.get(i);
            indicator = tester.getIndicator();
            type = tester.getType();
            user = tester.getUser();
            code = tester.getCode();
        //          System.out.println("153 changsplot  " + indicator + " " + CalcValues.plotIndicator + "  " + code);
            if (indicator == CalcBase.getPlotIndicator() && true) {   //!(code == 30)
                firstPoint = tester.getWeldPointFirst();
                lastPoint = tester.getWeldPointLast();
                middelPoint = tester.getWeldPointMiddel();
                textPoint = tester.getWeldPointTextPoint();
                //    System.out.println("159 old mini  " + firstPoint);
                firstPoint = calcPoint(firstPoint.x, firstPoint.y);
                textPoint = calcPoint(textPoint.x, textPoint.y);
                middelPoint = calcPoint(middelPoint.x, middelPoint.y);
                lastPoint = calcPoint(lastPoint.x, lastPoint.y);
                //      System.out.println("164 new mini  " + firstPoint);
                tester.setWeldPointFirst(firstPoint);
                tester.setWeldPointMiddel(middelPoint);
                tester.setWeldPointLast(lastPoint);
                tester.setWeldPointTextPoint(textPoint);
                tester.setCode(30);
                testerNew = weldList.get(i);
                actualList.add(testerNew);
            }
        }

//////////////////////////////////////////////////////////////////////////////////////////////
        if(plotModell == 4 ) {
//////////////////////////////
            for (int  j= 0; j < numberWeld; j++) {
                tester = weldList.get(j);
                indicator = tester.getIndicator();
                type = tester.getType();
                user = tester.getUser();
                code = tester.getCode();

                if (( indicator == modellIndicator[1]   ||   indicator == modellIndicator[2]   ||   indicator == modellIndicator[3] )    && (code == 30)) {

                    tester.setIndicator(modellIndicator[4]);
                    actualList.add(tester);
                }
            }
        }
        int  numberActual = actualList.size();
        svgWeld = "";
        int ant = svgStringWeld.size();
        int ind = 0;
        //    System.out.println("plotModell  " + this.plotModell + "  "  + numberActual);
        //   plotModell = 5;
        for (int i = 0; i < numberActual; i++) {
            testerNew = actualList.get(i);
            indicator = testerNew.getIndicator();
            type = testerNew.getType();
            user = testerNew.getUser();
            code = testerNew.getCode();
            firstPoint = testerNew.getWeldPointFirst();
            middelPoint = testerNew.getWeldPointMiddel();
            lastPoint = testerNew.getWeldPointLast();
            textPoint = testerNew.getWeldPointTextPoint();
            ident = testerNew.getWeldPointText();
            punktPlottes = testerNew.getWeldPointPlottes();
            textPlottes = testerNew.getWeldTextPlottes();
            type = testerNew.getType();
            ind = i;
            typePlot = testerNew.getPlotType();
            if (code == 2 ) {
                svgInnhold = canv.drawBezier2(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
            }
            if (code == 3 ) {
                svgInnhold = canv.drawBezier3(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
            }
            svgStringWeld.add(ant + ind, svgInnhold);
            svgWeld = svgWeld + svgStringWeld.get(ant + ind);

            if (punktPlottes) {

                svgInnhold = canv.drawCircle(firstPoint.x, firstPoint.y, 3);
                svgStringCircleFirst.add(ant + ind, svgInnhold);
                svgWeld = svgWeld + svgStringCircleFirst.get(ant + ind);
                svgInnhold = canv.drawCircle(lastPoint.x, lastPoint.y, 3);
                svgStringCircleLast.add(ant + ind, svgInnhold);
                svgWeld = svgWeld + svgStringCircleLast.get(ant + ind);
                svgInnhold = canv.drawCircle(middelPoint.x, middelPoint.y, 3);
                svgStringCircleMiddel.add(ant + ind, svgInnhold);
                svgWeld = svgWeld + svgStringCircleMiddel.get(ant + ind);

            }
            if (textPlottes) {
                svgInnhold = canv.drawText(ident, textPoint.x, textPoint.y);
                svgStringText.add(ant + ind, svgInnhold);
                svgWeld = svgWeld + svgStringText.get(ant + ind);

            }



        }
        //  System.out.println("svgWeld  " + svgWeld);
        //    System.out.println("test ChangePlot " + plotModus + "  " + plotModell);
        modellIndicator[plotModell] = indicator ;
        CalcValues.setModellIndicator(modellIndicator);

        if(plotModell == 1 ) { gang[2] =7;}
        if(plotModell == 2 ) { gang[2] =8;}
        if(plotModell == 3 ) { gang[2] =9;}
        if(plotModell == 4 ) { gang[2] =10;}
        if(plotModell == 5 ) { gang[2] =11;}
        if(plotModell == 6 ) { gang[2] =15;}
        if(plotModell == 7 ) { gang[2] =12;}
        CalcUser.setPlotModell( plotModell);
        CalcValues.setGang(gang);

//////////////////////////

        CalcBase.setSvgNew( svgWeld);    //  + CalcValues.svgSymbol
        //     System.out.println("svgNew = " + svgWeld);
//     System.out.println("ekstra  =  " +  CalcValues.svgSymbol);
        if(plotModell == 4 ){
            CalcBase.setSvgBuffer(svgWeld);
        }

        new DrawWeldinnString();

    }
    private Point calcPoint(int x, int y){
        Point resultPoint = new Point();
        int xMove = 0;
        int yMove = 0;

        if (CalcUser.getPlotType().equals("fillet" ) && gang[2] == 0) yMove += -48;
        if (CalcUser.getPlotType().equals("flanged" ) && gang[2] == 0) yMove += -48;
        if (CalcUser.getPlotType().equals("overlap" ) && gang[2] == 0) yMove += -48;
     //   if (plotType.equals("corner" ) && gang[2] == 0) yMove += -48;
    //   if (plotType.equals("fillet" ) && gang[2] == 14) { xMove += -0; yMove += -0;}
        if (plotModell == 4 ) { xMove += 300 ; yMove += 300;}
        if (plotModell == 3 ) { xMove += -300 ; yMove += 300;}
        if (plotModell == 2 ) { xMove += 300 ; yMove += -130;}
        if (plotModell == 1 ) { xMove += -300 ; yMove += -130;}
        if (plotModell == 5 ) { xMove += -300 ; yMove += -130;}
        if (plotModell == 6 ) { xMove += -300 ; yMove = -130;}
        resultPoint.x = x + xMove;
        resultPoint.y = y + yMove ;
        return resultPoint;
    }
}





