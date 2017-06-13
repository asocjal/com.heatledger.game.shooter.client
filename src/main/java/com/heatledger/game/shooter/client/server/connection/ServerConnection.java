package com.heatledger.game.shooter.client.server.connection;

import static jsweet.dom.Globals.console;

import java.util.function.Function;

import jsweet.dom.Event;
import jsweet.dom.MessageEvent;
import jsweet.dom.WebSocket;

public class ServerConnection {
	
	WebSocket socket = null;
	private transient boolean connected = false;
	
	public int posX = 0;
	public int posY = 0;
	
	public void connect() {
		console.info("Socket connecting... to remote ");
		socket = new WebSocket("ws://192.168.0.20/shooter/websocketendpoint");
		
//		socket.addEventListener(jsweet.util.StringTypes.open, event -> {
//			connected = true;
////			console.info("Socket opened");
//			
////			console.info("Socket sent \"dzien doberek\"");
//			return null;
//		});
				
//		socket.addEventListener(jsweet.util.StringTypes.message, messageEvent -> {
//			
//			String msg = messageEvent.data.toString();
//			String[] positions = msg.split("x");
//			posX = Integer.parseInt(positions[0]);
//			posY = Integer.parseInt(positions[1]);
//			return null;
//		});
	}
	
	public void onConnected(Function<Event, Object> listener) {
		socket.addEventListener(jsweet.util.StringTypes.open, listener);
	}
	
	public void send(String message) {
		socket.send(message);
	}
	
	public void addMessageListener(Function<MessageEvent, Object> listener) {
		socket.addEventListener(jsweet.util.StringTypes.message, listener);
	}
	
}
