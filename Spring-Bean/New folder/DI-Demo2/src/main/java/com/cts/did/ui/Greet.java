package com.cts.did.ui;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cts.did.service.GreetService;
import com.cts.did.service.GreetServiceSimpleImpl;

public class Greet {

	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("beans2.xml");
		GreetService gs=(GreetService) context.getBean("g2");
		System.out.println(gs.greet("Mahesh"));
	}

}
