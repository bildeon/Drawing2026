package com.example.application.html;

import com.example.application.Mouse.DrawWeldingSymbol;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.Route;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;



@Route("emptystring")
public class EmptyString  {
    private int ind;
    private int permanentInd = CalcBase.getPlotIndicator();

    private  int[] gang = new int[25];

    private int[] bufferId = new int[10];
    private  Point firstPoint = new Point();
    private  Point middelPoint = new Point();
    private   Point lastPoint = new Point();
    private    Point textPoint = new Point();
    private    String ident;
    private  boolean punktPlottes;
    private     boolean textPlottes;
    private int numberWeld;
    private WeldPoint tester = new WeldPoint();
    private     WeldPoint testerNew = new WeldPoint();
    private ArrayList<WeldPoint> weldList = new ArrayList<>();
    private ArrayList<WeldPoint> actualList = new ArrayList<>();
    private     String svgInnhold;
    private    String svgWeld;
    private  String user;
    private  String svgTab = " ";
    private  int type;
    private   int indicator;
    private   String typePlot;
    private   java.util.List<String> svgStringWeld = new ArrayList<>();
    private   java.util.List<String> svgStringCircleFirst = new ArrayList<>();
    private   java.util.List<String> svgStringCircleLast = new ArrayList<>();
    private    java.util.List<String> svgStringCircleMiddel = new ArrayList<>();
    private   List<String> svgStringText = new ArrayList<>();
    private   String aText = "";
    private    int a1=0;
    private    int a2 = 0;
    private    int a3 = 0;

    private    WeldSymbol sym1 = new WeldSymbol(aText, a1,a2, a1);
    private   WeldSymbol sym2 = new WeldSymbol(a1, a1,a2);

    private    String svgSymbol;

    private    int code;
    private   List<String> svgStringSymbol = new ArrayList<>();
    private     List<String> svgStringCircleSymbol = new ArrayList<>();

    public EmptyString() {
     //   System.out.println("visit emptystring");
        String outSvgNew;  // =  outSvg;
        var canv = new svg();
        canv.setColor("red");
        bufferId = CalcUser.getBufferId();
        String svgStop = canv.svgEnd();

        this.weldList = CalcValues.getWeldList();
        numberWeld = weldList.size();
        svgWeld = "";

        for (int ii = 0; ii < 5; ii++) {

            if (bufferId[ii] > 0) {
                ind = bufferId[ii];
                //System.out.println("ii  " + ii +" ind " + ind + " numberWeld " + numberWeld);
                for (int i = 0; i < numberWeld; i++) {
                    tester = weldList.get(i);
                    indicator = tester.getIndicator();
                    type = tester.getType();
                    user = tester.getUser();
                      //    System.out.println (" totalt " + indicator + " " +  " " + ind + "  " + " " + CalcValues.plotIndicator);
                    if (indicator == ind) {
                        actualList.add(0, tester);
                    }
                /*
                if (gang[2] == 12) {
                    if (( type == 7 || type ==8 || type == 11  )&& user.equals(CalcValues.userID)){
                        actualList.add(0,tester);
                    }
                }
                if (gang[2] == 10) {
                    if (( type == 7 || type ==8 || type == 9 || type == 11 || type == 15  )&& user.equals(CalcValues.userID)){
                        actualList.add(0,tester);
                    }
                }
                if (gang[2] == 16) {
                    if (( type == 7 || type ==9 || type == 15  )&& user.equals(CalcValues.userID)){
                        actualList.add(0,tester);
                    }
                 */
                }

            }
        }

       // System.out.println("aktuellList   " + actualList.size() + "  "  +  svgStringWeld.size() + "   "  + weldList.size() );

        int ant = svgStringSymbol.size();
        for (int ind = 0; ind < actualList.size(); ind++){
            tester = actualList.get(ind);
            code = tester.getCode();
            indicator = tester.getIndicator();

            if ( code == 2 ) {   // code = 2 angir at dette er et symbol code = 1 angir e streng  // && indicator == CalcValues.plotIndicator
                Point ppTest = tester.getWeldPointTextPoint();
                a1 = ppTest.x;
                a2 = ppTest.y;
                ident = tester.getWeldPointText();
                aText = tester.getAString();
                WeldSymbol sym1 = new WeldSymbol( 1, a1,a2);
                switch ( aText ) {
                    case "1" :
                        svgInnhold = sym1.choseSymbol(1, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "2" :
                        svgInnhold = sym1.choseSymbol(2, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "3" :
                        svgInnhold = sym1.choseSymbol(3, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "4" :
                        svgInnhold = sym1.choseSymbol(4, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "5" :
                        svgInnhold = sym1.choseSymbol(5, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "6" :
                        svgInnhold = sym1.choseSymbol(6, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "7" :
                        svgInnhold = sym1.choseSymbol(7, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "8" :
                        svgInnhold = sym1.choseSymbol(8, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "9" :
                        svgInnhold = sym1.choseSymbol(9, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "10" :
                        svgInnhold = sym1.choseSymbol(10, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "11" :
                        svgInnhold = sym1.choseSymbol(11, a1, a2);
                        tester.setSymbol(svgInnhold);
                    case "12" :
                        svgInnhold = sym1.choseSymbol(12, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "13" :
                        svgInnhold = sym1.choseSymbol(13, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "14" :
                        svgInnhold = sym1.choseSymbol(14, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "15" :
                        svgInnhold = sym1.choseSymbol(15, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "16" :
                        svgInnhold = sym1.choseSymbol(16, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "17" :
                        svgInnhold = sym1.choseSymbol(17, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "18" :
                        svgInnhold = sym1.choseSymbol(18, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "19" :
                        svgInnhold = sym1.choseSymbol(19, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "20" :
                        svgInnhold = sym1.choseSymbol(20, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "21" :
                        svgInnhold = sym1.choseSymbol(21, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    case "22" :
                        svgInnhold = sym1.choseSymbol(22, a1, a2);
                        tester.setSymbol(svgInnhold);
                        break;
                    default :  break;
                }
                svgWeld += svgInnhold;
            }
        }




        for (int i = 0; i < actualList.size(); i++) {
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
                svgWeld += canv.drawBezier2(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
                //     System.out.println(svgWeld);
            }
            if ( code == 2) {
                svgWeld += canv.drawText(ident, textPoint.x, textPoint.y);
                int tall = sym1.giveInteger(aText);
                String textNew = sym2.choseSymbol( tall, textPoint.x, textPoint.y);
                tester.setSymbol(textNew);
                svgWeld += textNew;
            }

            if (punktPlottes && ( code == 1 || code == 3)) {
                svgWeld += canv.drawCircle(firstPoint.x, firstPoint.y, 3);
                svgWeld += canv.drawCircle(lastPoint.x, lastPoint.y, 3);
                svgWeld += canv.drawCircle(middelPoint.x, middelPoint.y, 3);
                //    System.out.println(svgWeld);
            }

        }


        //   System.out.println(svgWeld);
        CalcBase.setSvgExtra( svgWeld );
      //  CalcValues.svgExtra += CalcValues.svgSymbol;
        UI.getCurrent().getPage().setLocation("Image");
    }
}

