Requirement: 
  1) Sis-bot FrontEnd first require you to clone the API server of Sis-Bot.
  2) Requires you to have mySQL
    For MySql, you must create the "sistering" database with the following tables:
            1) chats -->this tables records the messages.
               //this table should have:
                  'id' that's an interger and auto_increment
                  'message' that's a text
                  'type' that's another text
                  //(eg CREATE TABLE chats (
                    id int NOT NULL AUTO_INCREMENT,, 
                    message text,
                    type text);
             2) relationships -->table record relationship between chats id
                //this table should have:
                  'id' that's an interger and auto_increment
                  'origin' that's an interger
                  'destination' that's an interger
                  //(eg CREATE TABLE chats (
                    id int NOT NULL AUTO_INCREMENT,, 
                    origin int,
                    destination int);
