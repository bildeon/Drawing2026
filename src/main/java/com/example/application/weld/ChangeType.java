package com.example.application.weld;



import com.vaadin.flow.router.PageTitle;

//@Route( "YY")
@PageTitle("Weld IT AS - Change type specifications")
public class ChangeType {
    private   String plotType;


    public ChangeType() {
        this.plotType = CalcUser.getPlotType();

        System.out.println("tttt " + plotType);
        if (this.plotType.equals("butt") || this.plotType.equals("Butt")) {
            new CalcChange();
        }
        if (this.plotType.equals("Fillet")) {
            new FilletChange();
        }
        if (this.plotType.equals("Flanged")) {
            new FlangedChange();
        }
        if (this.plotType.equals("Corner")) {
            new FilletChange();
        }
        if (this.plotType.equals("On plate")) {
            new CamChange();
        }


    }
}


