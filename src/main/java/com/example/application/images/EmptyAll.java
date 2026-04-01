package com.example.application.images;


import com.example.application.weld.CalcUser;


public class EmptyAll {
    private boolean[] inBuffer = new boolean[17];
    int ind = 17;


    public EmptyAll() {
        this.inBuffer =   CalcUser.getInBuffer();
        for ( int i=0;i<ind;i++){
            this.inBuffer[i] = false;
        }
        CalcUser.setInBuffer(inBuffer);
    }
}

