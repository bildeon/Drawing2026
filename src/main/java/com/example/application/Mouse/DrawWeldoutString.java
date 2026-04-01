package com.example.application.Mouse;




import com.example.application.html.WeldSymbol;
import com.example.application.html.svg;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.UI;


import java.awt.*;
import java.util.ArrayList;
import java.util.List;




/**
 * Generate string of svg code for weldPoint on printing page
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 *
 */

public class DrawWeldoutString {
    private   Point firstPoint = new Point();
    private    Point middelPoint = new Point();
    private    Point lastPoint = new Point();
    private     Point textPoint = new Point();
    private   String ident;
    private boolean punktPlottes;
    private    boolean textPlottes;
    private    int numberWeld;
    private   int  indicator;
    private WeldPoint tester = new WeldPoint();
    private  ArrayList<WeldPoint> weldList = new ArrayList<>();
    private ArrayList<WeldPoint> actualList = new ArrayList<>();

    private  int[] gang = new int[25];

    private    String svgInnhold;
    private    String svgWeld;
    private    int type;
    private    String typePlot;
    private   List<String> svgStringWeld = new ArrayList<>();
    private List<String> svgStringCircleFirst = new ArrayList<>();
    private   List<String> svgStringCircleLast = new ArrayList<>();
    private   List<String> svgStringCircleMiddel = new ArrayList<>();
    private List<String> svgStringText= new ArrayList<>();
    private   String user;
    private    String aText = "0";
    private    int a1=0;
    private    int a2 = 0;
    private    int a3 = 0;

    private    WeldSymbol sym1 = new WeldSymbol(aText, a1,a2, a1);
    private    WeldSymbol sym2 = new WeldSymbol(a1, a1,a2);
    public DrawWeldoutString() {
        String outSvgNew;  // =  outSvg;
        var canv = new svg();
        canv.setColor("red");
        gang = CalcValues.getGang();
        String svgStop = canv.svgEnd();

        this.weldList = CalcValues.getWeldList();
        numberWeld = weldList.size();
        svgWeld = "";

        for ( int i=0; i<numberWeld; i++) {
            tester = weldList.get(i);
            indicator = tester.getIndicator();
            type = tester.getType();
            user = tester.getUser();
            if (indicator == CalcBase.getPlotIndicator()) {
                actualList.add(tester);
            }
            if (gang[2] == 12) {
                CalcBase.setEmptyBuffer(12);
                if (( type == 7 || type ==8 || type == 11  )&& user.equals(CalcValues.getUserID())){
                    actualList.add(tester);
                }
            }
            if (gang[2] == 10) {
                CalcBase.setEmptyBuffer(10);
                if (( type == 7 || type ==8 || type == 9 || type == 11 || type == 15  )&& user.equals(CalcValues.getUserID())){
                    actualList.add(tester);
                }
            }
            if (gang[2] == 16) {
                CalcBase.setEmptyBuffer(16);
                if (( type == 7 || type ==9 || type == 15  )&& user.equals(CalcValues.getUserID())){
                    actualList.add(tester);
                }
            }
        }
        int ant = svgStringWeld.size();
        for (int ind = 0; ind < actualList.size(); ind++) {

            tester = actualList.get(ind);
            firstPoint = tester.getWeldPointFirst();
            middelPoint = tester.getWeldPointMiddel();
            lastPoint = tester.getWeldPointLast();
            textPoint = tester.getWeldPointTextPoint();
            ident = tester.getWeldPointText();
            punktPlottes = tester.getWeldPointPlottes();
            textPlottes = tester.getWeldTextPlottes();
            type = tester.getType();
            typePlot = tester.getPlotType();
            indicator = tester.getIndicator();

            String ident = tester.getWeldPointText();
            aText = tester.getAString();
            int code  = tester.getCode();
            if(  code == 1) {
                svgWeld += canv.drawBezier2(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
                svgWeld += canv.drawText(ident  ,textPoint.x,textPoint.y );
            }
            if( code == 3 ) {
                svgWeld += canv.drawBezier3(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
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
            }

        }


        CalcBase.setSvgNew(svgWeld);
        if (CalcBase.getValgIndeks() == 1) {
            UI.getCurrent().getPage().setLocation("ImageLast");
        }
        if (CalcBase.getValgIndeks() == 2) {
            UI.getCurrent().getPage().setLocation("Image");
        }
        if (CalcBase.getValgIndeks() == 3) {
     //       UI.getCurrent().getPage().setLocation("zoommenue");
        }
        if (CalcBase.getValgIndeks() == 4) {
            //     new ZoomMenue5();
            UI.getCurrent().getPage().setLocation("zoomimage");
        }
    }

}


