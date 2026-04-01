package com.example.application.weld;




import com.example.application.under.ExtraImage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class CalcUser {
    private static String userID;

    private static Map<String, String[]> partImageTable = new HashMap<>();
    private static Map<String,boolean[]> inBufferTable = new HashMap<>();
    private static Map<String,ArrayList<ExtraImage>> imageListTable = new HashMap<>();
    private static Map<String,int[]> bufferIdTable = new HashMap<>();

    private static String[]  partImage = new String[10];
    private static boolean[] inBuffer = new boolean[17];
    private static ArrayList<ExtraImage> imageList = new ArrayList<ExtraImage>();
    private static int[] bufferId = new int[10];
    private static String bufferFile = "";
    private static String firstElement= "";
    private static String lastElement= "";
    private static String drawElement= "";;
    private static int plotModell = 0;
    private static String plotType = "";
    private static boolean generateImage = false;

    public CalcUser(String userID){
        this.userID = userID;

        partImage = partImageTable.computeIfAbsent(userID, id -> new String[10]);
        //     partImage = partImageTable.get(userID);
        inBuffer  = inBufferTable.computeIfAbsent(userID, id -> new boolean[17]);
        //    inBuffer = inBufferTable.get(userID);
        imageList = imageListTable.computeIfAbsent(userID, id -> new ArrayList<>());
        //    imageList = imageListTable.get(userID);
        bufferId = bufferIdTable.computeIfAbsent(userID, id -> new int[10]);
        //     bufferId = bufferIdTable.get(userID);
        //  System.out.println("inn CalcUser " + userID);
        for (int i = 0; i < partImage.length; i++) {
            partImage[i] = "";
        }
        for (int i = 0; i < inBuffer.length; i++) {
            inBuffer[i] = false;
        }
        for (int i = 0; i < bufferId.length; i++) {
            bufferId[i] = 0;
        }
        ExtraImage extra = new ExtraImage("");
        //  imageList.add(0,extra);
        new CalcBase(this.userID);
    }

    public static boolean[] getInBuffer() {
        return inBuffer;
    }

    public static void setInBuffer(boolean[] inBuffer) {
        CalcUser.inBuffer = inBuffer;
    }

    public static ArrayList<ExtraImage> getImageList() {
        return imageList;
    }

    public static void setImageList(ArrayList<ExtraImage> imageList) {
        CalcUser.imageList = imageList;
    }

    public static String[] getPartImage() {

        return partImage;
    }

    public static void setPartImage(String[] partImage) {
        CalcUser.partImage = partImage;
    }

    public static int[] getBufferId() {
        return bufferId;
    }

    public static void setBufferId(int[] bufferId) {
        CalcUser.bufferId = bufferId;
    }



    public static String getBufferFile() {
        return bufferFile;
    }

    public static void setBufferFile(String bufferFile) {
        CalcUser.bufferFile = bufferFile;
    }

    public static String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        CalcUser.userID = userID;
    }

    public static String getLastElement() {
        return lastElement;
    }

    public static void setLastElement(String lastElement) {
        CalcUser.lastElement = lastElement;
    }

    public static String getDrawElement() {
        return drawElement;
    }

    public static void setDrawElement(String drawElement) {
        CalcUser.drawElement = drawElement;
    }

    public static String getFirstElement() {
        return firstElement;
    }

    public static void setFirstElement(String firstElement) {
        CalcUser.firstElement = firstElement;
    }

    public static int getPlotModell() {
        return plotModell;
    }

    public static void setPlotModell(int plotModell) {
        CalcUser.plotModell = plotModell;
    }

    public static String getPlotType() {
        return plotType;
    }

    public static void setPlotType(String plotType) {
        CalcUser.plotType = plotType;
    }

    public static boolean isGenerateImage() {
        return generateImage;
    }

    public static void setGenerateImage(boolean generateImage) {
        CalcUser.generateImage = generateImage;
    }

}
