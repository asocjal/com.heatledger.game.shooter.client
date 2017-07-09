package com.heatledger.game.shooter.client.tools;

import static jsweet.dom.Globals.document;

import com.heatledger.game.shooter.client.view.DrawCanvas;

import jsweet.dom.CanvasRenderingContext2D;
import jsweet.dom.HTMLAudioElement;
import jsweet.dom.HTMLImageElement;

public class LoopAnimation {
	
	private final HTMLImageElement sprite;
	
	private final int speed;
	private int speedCounter = 0;
	
	private int frameNumber = 0;
	
	private final int width;
	private final int imgPos;
	
	private void updateFrameNumber() {
		if(speedCounter < speed) {
			speedCounter++;
			return;
		}
		speedCounter = 0;
		if(frameNumber > 5) {
			frameNumber = 0;
		} else {
			frameNumber++;
		}
	}
	
	public LoopAnimation(final String spriteId, final int speed, int imgPos, int width) {
		sprite = (HTMLImageElement) document.getElementById(spriteId);
		this.speed = speed;
		this.imgPos = imgPos;
		this.width = width;
	}
	
	public void draw(DrawCanvas drawCanvas, double x, double y) {
		CanvasRenderingContext2D ctx = drawCanvas.getCtx();
		updateFrameNumber();
		ctx.beginPath();
		ctx.drawImage(sprite, imgPos, (1+frameNumber)*width, width, width, x, y, width, width);
		ctx.closePath();
	}

}
