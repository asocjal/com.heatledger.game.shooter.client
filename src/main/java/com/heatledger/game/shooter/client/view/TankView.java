package com.heatledger.game.shooter.client.view;

import com.heatledger.game.shooter.client.tools.Animation;

public class TankView implements ElementView {
	
	public enum Type {green, red};
	
	private final int radius = 5;
	private double dirx;
	private double diry;
	private double x;
	private double y;
	private boolean selected = false;
	
	Animation animation = new Animation("sprite-breakable-block", 10, 85, 84, 5);
	
	public void setCooridnates(double x, double y) {
		this.x = x;
		this.y = y;
	}
	
//	private final LnNode node;
	
	public TankView(double x, double y, Type type) {
//		dirx = (Math.random()-0.5);///4;
//		diry = (Math.random()-0.5);///4;
		this.x = x;
		this.y = y;
//		this.node = node;
//		this.node.setView(this);
		if(type == Type.green) {
			animation = new Animation("sprite-breakable-block", 10, 0, 84, 5);
		} else if(type == Type.red) {
			animation = new Animation("sprite-breakable-block", 10, 85, 84, 5);
		} else {
			throw new RuntimeException("Unknown tank type: " + type);
		}
	}
	
//	public LnNode getLnNode() {
//		return node;
//	}
	
	public double getX() {
		return x;
	}
	
	public double getY() {
		return y;
	}
	
	public void setDirX(double dirX) {
		this.dirx = dirX;
	}
	
	public void setDirY(double dirY) {
		this.diry = dirY;
	}

	public void draw(DrawCanvas drawCanvas) {
		x += dirx;
		y += diry;
		if((x < radius+1) || (x > drawCanvas.getWidth()-radius-1)) {
			dirx = -dirx;
		}
		if((y < radius+1) || (y > drawCanvas.getHeight()-radius-1)) {
			diry = -diry;
		}
			
		animation.draw(drawCanvas, x, y);
		
	}

	public boolean isSelected() {
		return selected;
	}

	public void setSelected(boolean selected) {
		this.selected = selected;
	}
	
}
