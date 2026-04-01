package com.example.application.weld;

import com.example.application.Mouse.DrawWeldinnString;
import com.example.application.Mouse.MakeMovePossible;
import com.example.application.diverse.camvas.GreetingComponent;
import com.example.application.html.ActualString;
import com.example.application.under.*;
import com.vaadin.flow.component.UI;
import java.util.ArrayList;
import java.util.List;
import com.vaadin.flow.server.VaadinSession;
/**
 * class collecting the object used i drawing
 * Give information of the different object and are used for testing
 * Klass generate the actual plot
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */
public class CreateAndShowGUI {
    private   String plotType;
    private  int antall;
    private   int xP;
    private  int[] gang = new int[25];
    private   int yP;
    private   List<ExtraLine> extraLine = new ArrayList<>();
    private    List<ExtraBase> extraBase = new ArrayList<>();

    private   List<ExtraBue> extraBue = new ArrayList<>();

    private    List<ExtraTall> extraTall = new ArrayList<>();

    private   List<ExtraEllipse> extraEllipse = new ArrayList<>();

    private    List<ExtraLine> extraLineTegn = new ArrayList<>();
    private    List<ExtraLine> extraLineTabell = new ArrayList<>();
    private     List<ExtraBue> extraBueTegn = new ArrayList<>();

    private   List<ExtraTall> extraTallTegn = new ArrayList<>();

    private    List<ExtraTall> extraTallBase = new ArrayList<>();

    private   List<ExtraEllipse> extraEllipseTegn = new ArrayList<>();

    private    List<ExtraArray> extraArrayTegn = new ArrayList<>();

    private   List<ExtraOval> extraOval = new ArrayList<>();
    private    List<ExtraText> extraText = new ArrayList<>();
    private   List<ExtraComment> extraComment = new ArrayList<>();
    private double[] zoomC = new double[20];
    private int[] vec = new int[35];
    private int[] bufferId = new int[10];

    public CreateAndShowGUI(String plotType, int antall, int[] vec) {
        this.plotType = plotType;
        this.antall = antall;
        this.extraOval = CalcValues.getExtraOval();
        this.extraText = CalcValues.getExtraText();
        this.extraBase = CalcValues.getExtraBase();
        this.extraLine = CalcValues.getExtraLine();
        this.extraBue = CalcValues.getExtraBue();
        this.extraTall = CalcValues.getExtraTall();
        this.extraEllipse = CalcValues.getExtraEllipse();
        this.extraLineTegn = CalcValues.getExtraLineTegn();
        this.extraLineTabell = CalcValues.getExtraLineTabell();
        this.extraBueTegn = CalcValues.getExtraBueTegn();
        this.extraTallTegn = CalcValues.getExtraTallTegn();
        this.extraArrayTegn = CalcValues.getExtraArrayTegn();
        this.extraTallBase = CalcValues.getExtraTallBase();
        this.extraEllipseTegn = CalcValues.getExtraEllipseTegn();
        this.extraComment = CalcValues.getExtraComment();
        this.xP = CalcValues.getxP();
        this.yP = CalcValues.getyP();
        this.zoomC = CalcValues.getZoomC();

        CalcUser.setGenerateImage(true);
        gang = CalcValues.getGang();
        CalcBase.setZoomIndex(zoomC[gang[2]]);
        if (vec[26] == 15 || vec[26] == 11 ) {
            CalcBase.setValgIndeks(1);  // 1
        } else {
            CalcBase.setValgIndeks(4);
        }
        new CalcChange();
        //   System.out.println(" zoomIndex " + CalcValues.zoomIndex);
        //   System.out.println("test create " + CalcValues.gang[2]);
        //     for (int i = 0; i < 35 ; i++) {
        //        System.out.println("vec " +  " 26  " + vec[26]);
        //     }
        gang[2] = vec[26];
    //   if (CalcValues.gang[2] == 14 ) CalcValues.zoocdmIndex = 1.4;
        //  System.out.println("gang[2] =  " + CalcValues.gang[2]);
if (bufferId[4] > 0 || bufferId[7] > 0){
    CalcBase.setSvgExtra("");
    bufferId[0] = 0;
    bufferId[1] = 0;
    bufferId[2] = 0;
    bufferId[3] = 0;
    bufferId[4] = 0;
    bufferId[5] = 0;
    bufferId[6] = 0;
    bufferId[7] = 0;
    CalcUser.setBufferId(bufferId);
}
        CalcBase.setNumberOfSymbols(0);
    //    CalcValues.setWeldList(new ArrayList<>());
        if ( (CalcValues.getUserID().equals(VaadinSession.getCurrent().getAttribute("tenantUser") != null ?            VaadinSession.getCurrent().getAttribute("tenantUser").toString() :            GreetingComponent.getUserIdents()))) {
            new MakeMovePossible();
       //     new ActualString();
        //   new DrawWeldinnString();
            UI.getCurrent().getPage().setLocation("/thymeleaf-example");


        }

    }
}




