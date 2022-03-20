package com.newsandevents.listeners;

import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

import com.newsandevents.models.Newsandevents;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class MongoListener extends AbstractMongoEventListener<Newsandevents> {
  @Override
  public void onBeforeConvert(BeforeConvertEvent<Newsandevents> event) {
    super.onBeforeConvert(event);

    Date date = new Date();
    SimpleDateFormat ft = 
    	      new SimpleDateFormat ("dd.MM.yyyy 'at' hh:mm:ss a zzz");
  
    String datetime = ft.format(date);
    String _date = datetime.substring(0,10);
    String _time = datetime.substring(15,29);
    
    event.getSource().setDate(_date);
    event.getSource().setTime(_time);
  }
}