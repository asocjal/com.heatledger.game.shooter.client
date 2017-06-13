package com.heatledger.game.shooter.client;

import static jsweet.dom.Globals.alert;
import static jsweet.dom.Globals.document;
import static jsweet.dom.Globals.window;

import com.heatledger.game.shooter.client.server.connection.ServerConnection;
import com.heatledger.game.shooter.client.view.DrawCanvas;
import com.heatledger.game.shooter.client.view.ElementsToDraw;
import com.heatledger.game.shooter.client.view.TankView;

import jsweet.dom.HTMLCanvasElement;
import jsweet.dom.Image;

public class Main {
	
	TankView tankView;
	ServerConnection serverConnection = null;
	ElementsToDraw elementsToDraw = new ElementsToDraw();
	DrawCanvas drawCanvas;
	
	public static void main(String[] args) {
		window.onload = (e) -> {
			Main main = new Main();
			main.run();
			return main;
		};
	}
	
	public void run() {
		alert("Waiting for serer connection");
		serverConnection = new ServerConnection();
		serverConnection.connect();
		
		serverConnection.onConnected(event -> {
			alert("Connected to server");
			HTMLCanvasElement canvas = (HTMLCanvasElement)document.getElementById("canvas");
			drawCanvas = new DrawCanvas(canvas);
			
			tankView = new TankView(10, 10);
			elementsToDraw.add(tankView);
			
			onFrame();
			
			return null;
		});
		
		serverConnection.addMessageListener(message -> {
//			alert("Receiving message");
			String msg = message.data.toString();
//			alert("Message received: " + msg);
			String[] split = msg.split("x");
			tankView.setCooridnates(Double.parseDouble(split[0]), Double.parseDouble(split[1]));
			return null;
		});
		
		Image animations = new Image();
//		animations.
		
	}
	
	private void animateFrame() {
		
		drawCanvas.getCtx().clearRect(0, 0, drawCanvas.getWidth(), drawCanvas.getHeight());
		elementsToDraw.draw(drawCanvas);

	}

	private void onFrame() {
		serverConnection.send("Give me coordinates");
//		positionAdapter.adaptPositions(elementsToDraw);
		animateFrame();
		window.requestAnimationFrame((time) -> {
			this.onFrame();
		});
	}

}
