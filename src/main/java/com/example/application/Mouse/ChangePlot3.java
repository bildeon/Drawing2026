package com.example.application.Mouse;

import com.example.application.html.WeldSymbol;
import com.example.application.html.svg;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;
import com.example.application.weld.ImageStorage;
import com.helger.commons.typeconvert.ITypeConverterRule;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;




/**
 * Generate string of svg kode for the actual weldPoint
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */

public class ChangePlot3 {
    private   Point resultPoint = new Point();
    private   Point firstPoint = new Point();
    private    Point middelPoint = new Point();
    private    Point lastPoint = new Point();
    private   Point textPoint = new Point();

    private  int[] gang = new int[25];

    private   String ident;
    private  boolean punktPlottes;
    private    boolean textPlottes;
    private    int numberWeld;
    private   int plotModus;
    private   WeldPoint tester = new WeldPoint();
    private    WeldPoint testerNew = new WeldPoint();
    private ArrayList<WeldPoint> weldList = new ArrayList<>();
    private ArrayList<WeldPoint> actualList = new ArrayList<>();
    private static String[]  partImage = new String[10];
    private     String svgInnhold;
    private    String svgWeld;
    private    String user;
    private    int type;
    int indicator;
    private    String typePlot;
    private    List<String> svgStringWeld = new ArrayList<>();
    private   List<String> svgStringCircleFirst = new ArrayList<>();
    private    List<String> svgStringCircleLast = new ArrayList<>();
    private    List<String> svgStringCircleMiddel = new ArrayList<>();
    private    List<String> svgStringText = new ArrayList<>();
    private    int zoomStorage;
    private    double zoomIndex;
    private    double zoomNew;
    private    int newIndex;
    private    int oldPlotIndicator;
    private int plotModell;
    private   int [] modellIndicator = new int[10];
    private    String aText = "";
    private    int a1=0;
    private    int a2 = 0;
    private   int a3 = 0;

    private    WeldSymbol sym1 = new WeldSymbol(aText, a1,a2, a1);
    private    WeldSymbol sym2 = new WeldSymbol(a1, a1,a2);

    public ChangePlot3(int plotModus, int oldPlotIndicator) {
        this.oldPlotIndicator = oldPlotIndicator;
        this.modellIndicator = CalcValues.getNewAdresses();
        gang = CalcValues.getGang();
        this.zoomStorage = CalcBase.getZoomStorage();
        this.plotModell = CalcUser.getPlotModell();
        this.zoomIndex = CalcBase.getZoomIndex();
        this.plotModus = plotModus;
        this.weldList = CalcValues.getWeldList();
        for (String s : this.partImage = CalcUser.getPartImage()) {

        }

        newIndex = 0;
        CalcBase.setSvgNew("");
        String outSvgNew;  // =  outSvg;
        svg canv = new svg();
        canv.setColor("red");
        canv.setStroke(1);
        String svgStop = canv.svgEnd();
        int code;
        numberWeld = weldList.size();
        svgWeld = "";
  //      System.out.println("inn ChangerPlot3 ");
//////////////////////////////////////////////////////////////////////////////////////////////
        for (int i = 0; i < numberWeld; i++) {
            tester = weldList.get(i);
            indicator = tester.getIndicator();
            type = tester.getType();
            user = tester.getUser();
            code = tester.getCode();
            if (indicator == CalcBase.getPlotIndicator()) {

                if ( code == 1 || code == 3 ) {
                    firstPoint = tester.getWeldPointFirst();
                    lastPoint = tester.getWeldPointLast();
                    middelPoint = tester.getWeldPointMiddel();
                    textPoint = tester.getWeldPointTextPoint();

                    firstPoint = calcPoint(firstPoint.x, firstPoint.y);
                    textPoint = calcPoint(textPoint.x, textPoint.y);
                    middelPoint = calcPoint(middelPoint.x, middelPoint.y);
                    lastPoint = calcPoint(lastPoint.x, lastPoint.y);

                    tester.setWeldPointFirst(firstPoint);
                    tester.setWeldPointMiddel(middelPoint);
                    tester.setWeldPointLast(lastPoint);
                    tester.setWeldPointTextPoint(textPoint);
                }

                if ( code == 2 ) {
                    textPoint = tester.getWeldPointTextPoint();
                    textPoint = calcPoint(textPoint.x, textPoint.y);
                    tester.setWeldPointTextPoint(textPoint);
                }
           //     System.out.println("actual old  " + textPoint + "   "  +ident + "   "  + code);
                actualList.add(0,tester);
      //        System.out.println("textPoint  " +  tester.getWeldPointTextPoint());
            }
        }
        int  numberActual = actualList.size();
   //    System.out.println("numberActual  " + "  " + actualList.size());
//////////////////////////////////////////////////////////////////////////////////////////////
        /*
        if(plotModell == 4 ) {
//////////////////////////////
            for (int  j= 0; j < numberWeld; j++) {
                tester = weldList.get(j);
                indicator = tester.getIndicator();
                type = tester.getType();
                user = tester.getUser();
                code = tester.getCode();

                if (( indicator == CalcValues.modellIndicator[1]   ||   indicator == CalcValues.modellIndicator[2]   ||   indicator == CalcValues.modellIndicator[3] )  ){    //&& (code == 30)) {

                    tester.setIndicator(CalcValues.modellIndicator[4]);
                    actualList.add(0, tester);
                }
            }
        }

         */
   //     System.out.println("numberActual  " + "  " + actualList.size()  +   "   polotModell " + plotModell);
        numberActual = actualList.size();
   //   System.out.println("numberActual etter " + "  " + numberActual);
        svgWeld = "";
        int ant = svgStringWeld.size();
        int ind = 0;
        String textNew;
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
            aText = testerNew.getAString();
            type = testerNew.getType();
            ind = i;
            typePlot = testerNew.getPlotType();

            if (code == 1 ) {
                svgWeld += canv.drawBezier2(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
                svgWeld += canv.drawText(ident, textPoint.x, textPoint.y);
            //    System.out.println(svgWeld);
            }
            if (code == 3 ) {
                svgWeld += canv.drawBezier3(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
           //     System.out.println(svgWeld);
            }
            if ( code == 2) {
                svgWeld += canv.drawText(ident, textPoint.x, textPoint.y);
          //      System.out.println("test " + ident + "  " + aText );
                if (!(aText.equals("0") || aText.equals("100")))  {
                    int tall = sym1.giveInteger(aText);
                    textNew = sym2.choseSymbol(tall, textPoint.x, textPoint.y);
                    tester.setSymbol(textNew);
                //    System.out.println(textNew);
                    svgWeld += textNew;
                }
            }

            if (punktPlottes && ( code == 1 || code == 3)) {
                svgWeld += canv.drawCircle(firstPoint.x, firstPoint.y, 3);
                svgWeld += canv.drawCircle(lastPoint.x, lastPoint.y, 3);
                svgWeld += canv.drawCircle(middelPoint.x, middelPoint.y, 3);
            //    System.out.println(svgWeld);
            }
            /*
            if (textPlottes) {
                svgWeld += canv.drawText(ident, textPoint.x, textPoint.y);

            }

             */

        }

        partImage[plotModell] = svgWeld;
        CalcUser.setPartImage(partImage);
        modellIndicator[plotModell] = indicator ;
        CalcValues.setModellIndicator(modellIndicator);

        if(plotModell == 1 ) { gang[2] =7;}
        if(plotModell == 2 ) { gang[2] =8;}
        if(plotModell == 3 ) {  gang[2] =9;}
        if(plotModell == 4 ) {   gang[2] =10;}
        if(plotModell == 5 ) {  gang[2] =11;}
        if(plotModell == 6 ) {   gang[2] =15;}
        if(plotModell == 7 ) {   gang[2] =12;}
        CalcUser.setPlotModell( plotModell);
        CalcValues.setGang(gang);
//////////////////////////

   //    CalcValues.svgNew = svgWeld;
      //  CalcValues.svgNew = svgWeld;
  //   svgBuffer = svgWeld;
        /* System.out.println("svgNew  " + svgNew); */

  //          System.out.println("svgBuffer = " + svgBuffer + "  for  plotModell  " + plotModell);
//     System.out.println("ekstra  =  " +  CalcValues.svgSymbol);
        if (plotModell == 4  ){
            for ( int i=1; i<4; i++) {
                partImage[plotModell] +=  partImage[i];
            }
            CalcUser.setPartImage(partImage);
        }
        if (plotModell == 7 ){
            for ( int i=1; i<3; i++) {
                partImage[plotModell] +=  partImage[i];
            }
            CalcUser.setPartImage(partImage);
        }
        CalcBase.setSvgBuffer( partImage[plotModell]);
   //     CalcValues.svgWeld = CalcValues.partImage[plotModell];

  //     System.out.println("svgBuffer etter " + plotModell);
   //     System.out.println(CalcValues.svgBuffer);
        if (plotModell == 4  || plotModell == 7 ){

            for ( int i=1; i<4; i++) {
                partImage[i] = "";

            }
            CalcUser.setPartImage(partImage);
        }
   //     System.out.println("out ChangerPlot3 ");
   //  new DrawWeldinnString();
   //    new DrawWeldingSymbol();
    //    System.out.println("out last ChangerPlot3 ");
    }
    private Point calcPoint(int x, int y){
        Point resultPoint = new Point();
        int xMove = 0;
        int yMove = 0;
        if (plotModell == 7 ) {
            int iFact = 9;
            double factor = 2.85;
            int xOrigo = 600;
            int yOrigo = 360 - iFact;
            int ix = x - xOrigo;
            int iy = y - yOrigo;
            double rOld = Math.sqrt(ix * ix + iy * iy);
            double f = factor;
            double sinA = iy / rOld;
            double cosA = ix / rOld;
            double rNew = f * rOld;
            double yNew = sinA * rNew;
            double xNew = cosA * rNew;
            int yNewi = (int) yNew;
            int xNewi = (int) xNew;
            Point middel =  new Point();
            int ivalue = 300;
            if (CalcUser.getPlotType().equals("corner" )) ivalue += 0;
            middel.x = xNewi + xOrigo ;
            middel.y = yNewi + yOrigo + iFact + ivalue ;
            return middel;
        }
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
        if (plotModell == 6 ) { xMove += -300 ; yMove += -130;}
        if (plotModell == 7 ) { xMove +=   0 ; yMove +=  300;}
    //    if (plotModus == 0 ) { xMove += 0 ; yMove = +-130;}
    //    if (plotModus == 5 ) { xMove += 0 ; yMove = 130;}
        resultPoint.x = x + xMove;
        resultPoint.y = y + yMove ;
        return resultPoint;
    }
}






