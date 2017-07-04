package com.heatledger.game.shooter.client.view;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ElementsToDraw {
	
	private final Map<String, List<? extends ElementView>> elemntGroups = new HashMap<String, List<? extends ElementView>>();
	
	public void assign(String id, List<? extends ElementView> elements) {
		this.elemntGroups.put(id, elements);
	}
	
	public void draw(final DrawCanvas drawCanvas) {
		for(List<? extends ElementView> elements : elemntGroups.values()) {
			for(ElementView el : elements) {
				el.draw(drawCanvas);
			}
		}
	}
	
//	public int getSize() {
//		return elemntGroups.size();
//	}
//	
//	public ElementView get(int index) {
//		return elemntGroups.get(index);
//	}
//	
//	public List<ElementView> getList() {
//		return elemntGroups;
//	}

}
