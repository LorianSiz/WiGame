package com.architecture.wigame.example;

import lombok.Getter;
import lombok.Setter;

//import javax.persistence.*;

//@Entity
//@Table(name = "organization")
@Setter
@Getter
public class Organization {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "organization_id")
    private Long id;

    //@Column(name = "name")
    private String name;
    //@Column(name = "name_contact")
    private String nameContact;
    //@Column(name = "firstname_contact")
    private String firstnameContact;
    //@Column(name = "mail_contact")
    private String mailContact;
    //@Column(name = "tel_contact")
    private String telContact;

    public Organization() {
        super();
    }
}
