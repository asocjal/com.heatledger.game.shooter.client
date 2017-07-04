package com.heatledger.game.shooter.client;

import static jsweet.dom.Globals.alert;
import static jsweet.dom.Globals.document;
import static jsweet.dom.Globals.window;

import java.util.ArrayList;
import java.util.List;

import com.heatledger.game.shooter.client.objects.Tanks;
import com.heatledger.game.shooter.client.server.connection.ServerConnection;
import com.heatledger.game.shooter.client.view.DrawCanvas;
import com.heatledger.game.shooter.client.view.ElementsToDraw;
import com.heatledger.game.shooter.client.view.TankView;

import jsweet.dom.HTMLCanvasElement;
import jsweet.dom.Image;
import jsweet.lang.Array;
import jsweet.lang.JSON;

import static def.jquery.Globals.$;

public class Main {
	
	
//	TankView tankView;
	ServerConnection serverConnection = null;
	ElementsToDraw elementsToDraw = new ElementsToDraw();
	Tanks greenTanks = new Tanks(elementsToDraw, TankView.Type.green); // tanks represents bids
	Tanks redTanks = new Tanks(elementsToDraw, TankView.Type.red); // tanks represents asks
	
	DrawCanvas drawCanvas;
	
	public static void main(String[] args) {
		window.onload = (e) -> {
			Main main = new Main();
			main.run();
			return main;
		};
	}
	
	public void run() {
//		alert("Waiting for serer connection");
		serverConnection = new ServerConnection();
		serverConnection.connect();
		
		serverConnection.onConnected(event -> {
//			alert("Connected to server");
			HTMLCanvasElement canvas = (HTMLCanvasElement)document.getElementById("canvas");
			drawCanvas = new DrawCanvas(canvas);
			
			serverConnection.send("get-sell-offers");
//			serverConnection.send("get-buy-offers");
					
			onFrame();
			
			return null;
		});
		
		serverConnection.addMessageListener(message -> {
//			alert("Receiving message");

			String msg = message.data.toString();
//			alert("Message received: " + msg);
			
			String[] msgs = msg.split("SEPARATEMSG");
			if(msgs.length != 2) {
				throw new RuntimeException("Incorrect message: " + msg);
			}
			
			refreshOffers(msgs[1], greenTanks);
			refreshOffers(msgs[0], redTanks);
		
			
//			JSONObject obj = new JSONObject(msg);
//			String[] split = msg.split("x");
//			tankView.setCooridnates(Double.parseDouble(split[0]), Double.parseDouble(split[1]));
			serverConnection.send("get-sell-offers");
			return null;
		});

		
	}
	
	private void refreshOffers(String jsonMsg, Tanks tanks) {
		Array<Object> arr = (Array<Object>) JSON.parse(jsonMsg);
//		alert("Number of asks " + arr.length);
		
		List<Offer> offers = new ArrayList<Offer>((int)arr.length);
		for(Object obj : arr) {
			offers.add(revive(obj));
		}
		
		tanks.refreshElementsToDraw(offers);
	}
	
	

	
	private Offer revive(Object untypedDto) {
        return (Offer) $.extend(new Offer(), untypedDto);
    }
	
	private void animateFrame() {
		
		drawCanvas.getCtx().clearRect(0, 0, drawCanvas.getWidth(), drawCanvas.getHeight());
		elementsToDraw.draw(drawCanvas);

	}

	private void onFrame() {
//		serverConnection.send("get-buy-offers");
//		serverConnection.send("get-sell-offers");
//		positionAdapter.adaptPositions(elementsToDraw);
		animateFrame();
		window.requestAnimationFrame((time) -> {
			this.onFrame();
		});
	}

}
