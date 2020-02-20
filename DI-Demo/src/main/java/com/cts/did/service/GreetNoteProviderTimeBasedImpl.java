package com.cts.did.service;

import java.time.LocalDateTime;

public class GreetNoteProviderTimeBasedImpl implements GreetNoteProvider {

	public String getNote() {
		LocalDateTime today=LocalDateTime.now();
		int h=today.getHour();
		String g="";
		if(h>=1 && h<12) {
			g="Good morning";
		}
		else if(h>=12 && h<16) {
			g="Good Afternoon";
		}
		else {
			g="Good Evening";
		}
		return g;
	}

}
