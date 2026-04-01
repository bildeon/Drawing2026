package com.example.application.Mouse;




import com.example.application.under.ExtraSymbol;
import com.example.application.under.WeldData;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcValues;

import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.List;

import java.awt.*;
/** Klassen fjerner en sveisestreng fra samlingen gitt i weldList
 * Konstruktør  MouseReleased(Point releasedPoint) hvor
 * Point releasedPoint er det elementet som skal fjernes fra listen
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */
public class MouseReleased {


    private   int indeks5 = -1;
    private int indeks6;
    private    int big = 5;
    private    boolean teksting;

    private     boolean tegning;

    private   String plotSort;
    private    Point lastPointNew;
    private     Point firstPointNew;
    private     Point middelPointNew;
    private String actualPath;
    private WeldPoint punkt = new WeldPoint();

    private List<BufferedImage> images = new ArrayList<>();

    private  ArrayList<WeldPoint> weldList = new ArrayList<>();

    private  ArrayList<WeldPoint> sveiseListe = new ArrayList<>();

    private ArrayList<WeldPoint> oldListe = new ArrayList<>();
    private  WeldData sveis = new WeldData(sveiseListe);

    private  List<ExtraSymbol> symbolListe = new ArrayList<>();


    private   boolean dragAllowed = false;
    private    boolean pressAllowed = false;

    private    boolean clickAllowed = false;
    private    boolean moveAllowed = false;
    private  Point firstPoint = new Point();
    private    Point middelPoint = new Point();
    private   Point lastPoint = new Point();
    private   Point releasedPoint = new Point();
    private   Point toPointNew = new Point();
    private int enterTypeOldOld = 0;
    private  WeldPoint tester = new WeldPoint();
    private   Point point = new Point();

    private   int enterType = 0;
    private    Boolean entered = Boolean.valueOf(false);
    private   int foundIndex = -1;
    private boolean lesFirst = true;
    private List<Integer> enterTypeOldNew = new ArrayList<>();

    private   List<Integer> enterTypeOldIndeks = new ArrayList<>();

    private  List<Integer> enterTypeIndeks = new ArrayList<>();
    private boolean moveNew;
    public MouseReleased(Point releasedPoint) {
        this.releasedPoint = releasedPoint;
        this.moveNew = CalcValues.isMoveNew();
        var can = new CalcValues();
        this.weldList = CalcValues.getWeldList();
    //    System.out.println("inn MouseReleased  ");
        enterTypeIndeks.add(0, Integer.valueOf(0));
// må søke gjennem alle punktene i sveiselisten for å lokalisere det aktuelle som skal ligge innenfor sirkelen med radius big
        int numberEl = weldList.size();
        if (numberEl >= 1) {
            enterTypeOldNew.add(0, Integer.valueOf(0));
            enterTypeOldIndeks.add(0, Integer.valueOf(0));
            entered = Boolean.valueOf(false);
            for (int i = 0; i < weldList.size(); i++) {
                if (!entered.booleanValue()) {
                    tester = weldList.get(i);
                    point = tester.getWeldPointFirst();
                    if (releasedPoint.x <= (point.x + big) && releasedPoint.x >= (point.x - big) &&
                            releasedPoint.y <= (point.y + big) && releasedPoint.y >= (point.y - big)) {
                        enterType = 1;
                        entered = Boolean.valueOf(true);
                        foundIndex = i;
                        moveAllowed = true;
                        //         System.out.println(" gert funnet indeks " + foundIndex + "  " + enterType);
                    }
                }

            }
            entered = Boolean.valueOf(false);
            for (int j = 0; j < weldList.size(); j++) {
                if (!entered.booleanValue()) {
                    tester = weldList.get(j);
                    point = tester.getWeldPointLast();
                    if (releasedPoint.x <= (point.x + big) && releasedPoint.x >= (point.x - big) &&
                            releasedPoint.y <= (point.y + big) && releasedPoint.y >= (point.y - big)) {
                        enterType = 3;
                        entered = Boolean.valueOf(true);
                        foundIndex = j;
                        moveAllowed = true;
                        //            System.out.println("  gert funnet indeks  " + foundIndex + "  " + enterType );
                    }
                }
            }

            entered = Boolean.valueOf(false);
            for (int l = 0; l < weldList.size(); l++) {
                if (!entered.booleanValue()) {
                    tester = weldList.get(l);
                    point = tester.getWeldPointMiddel();
                    if (releasedPoint.x <= (point.x + big) && releasedPoint.x >= (point.x - big) &&
                            releasedPoint.y <= (point.y + big) && releasedPoint.y >= (point.y - big)) {
                        enterType = 2;
                        entered = Boolean.valueOf(true);
                        foundIndex = l;
                        moveAllowed = true;
                        //             System.out.println("  gert funnet indeks  " + foundIndex + "  " + enterType );
                    }
                }
            }
            entered = Boolean.valueOf(false);
            for (int m = 0; m < weldList.size(); m++) {
                if (!entered.booleanValue()) {
                    tester = weldList.get(m);
                    point = tester.getWeldPointTextPoint();
                    if (releasedPoint.x <= (point.x + big) && releasedPoint.x >= (point.x - big) &&
                            releasedPoint.y <= (point.y + big) && releasedPoint.y >= (point.y - big)) {
                        enterType = 4;
                        entered = Boolean.valueOf(true);
                        foundIndex = m;
                        moveAllowed = true;
                        //            System.out.println("  gert funnet indeks  " + foundIndex + "  " + enterType );
                    }
                }
            }

            //      System.out.println("  gert funnet indeks avsluttet " + foundIndex + "  " + enterType );
            int enterTypeOld = enterType;
            Point flyttePointNew = new Point();
            int pointTeller = 0;


            if (pointTeller <= 1) {
                //flyttePointNew.x = e.getX();
                //flyttePointNew.y = e.getY();
                pointTeller++;
            }
            enterTypeOldOld = ((Integer) enterTypeOldNew.get(0)).intValue();
            if (enterTypeOldOld <= 0) {
                enterTypeOldOld = enterTypeOldOld;
            }
            Point malPoint = new Point();
            int indeks = 0;
            int indeks2 = 0;
            if (enterTypeOldIndeks.size() == 2) {
                indeks5 = enterTypeOldIndeks.get(0);
                foundIndex = ((Integer) enterTypeOldIndeks.get(0)).intValue();
                enterTypeIndeks.add(0, Integer.valueOf(foundIndex));
            }
            enterTypeOldIndeks.size();
            if (enterTypeOldNew.size() == 2) {
                indeks6 = enterTypeOldNew.get(0);
                indeks2 = 0;
            }
            if (enterTypeOldNew.size() == 1) {
                indeks = ((Integer) enterTypeOldNew.get(0)).intValue();
                indeks2 = 0;
            }

            if (moveAllowed)
                indeks5 = foundIndex;

     //       System.out.println("før  " + weldList.size() );

            if ( indeks5 >= 0 ) {;
                for (int j = 0; j < weldList.size(); j++) {
                    if (j < indeks5) {
                        oldListe.add(weldList.get(j));
                    }
                    if (j > indeks5) {
                        oldListe.add(weldList.get(j));
                    }
                }
                int last = weldList.size();
                weldList.remove(last-1);
          //      System.out.println("mellom " + weldList.size() );
                CalcValues.setWeldList(oldListe);
          //      System.out.println("etter " + weldList.size() );
            }

            if(moveNew) {
                new DrawWeldinnString();
            } else {
                //         new DrawWeldinnString();
            }
        }
    }
}






