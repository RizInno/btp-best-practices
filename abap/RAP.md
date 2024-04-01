# Contents

<!-- toc -->

- [Naming Conventions for Development Objects](#naming-conventions-for-development-objects)
  * [General Rules](#general-rules)
  * [ABAP Dictionary Objects](#abap-dictionary-objects)
    + [Database Tables](#database-tables)
    + [SQL View (Database View of CDS view)](#sql-view-database-view-of-cds-view)
  * [CDS Objects](#cds-objects)
    + [CDS Entity](#cds-entity)
    + [Behavior Definition](#behavior-definition)
    + [Metadata Extension](#metadata-extension)
  * [Business Services](#business-services)
    + [Service Definition](#service-definition)
    + [Service Binding](#service-binding)
  * [Source Code Objects](#source-code-objects)
    + [Behavior Pool](#behavior-pool)
    + [Handler and Saver Classes](#handler-and-saver-classes)

<!-- tocstop -->

# Naming Conventions for Development Objects

Naming conventions facilitate the development. An addition to the name of development objects conveys
standardized meaning and generates consistency in your development.

## General Rules


> &rarr; Remember <br>
> The general guideline for development objects is the following: `[/<namespace>/]` <br>
> `[<prefix>]_<object_name>_[<suffix>]`,`*Example: ZAPI_CURRENTINVENTORY_O2*`.

- Use your own namespace that is reserved for your organization.

>  **:information_source: Note** <br>
> Consider that the namespace /DMO/ is reserved for demo purposes. Do not use this namespace in
> your productive development.

- A prefix is used for cases when there are generically different types of one development object. Then, this
prefix states the semantic difference that cannot be conveyed through the object type.
For example, a service binding can expose an OData service for UI purposes and as a [Web API](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=1039).
That is why, for service bindings we introduce the prefixes *UI_* and *API_* to differentiate the semantics of
service bindings.
- A suffix is used for additional differentiation between different types of development objects. It helps to
recognize more subtle or secondary differences in development objects.
For example, a UI service can be bound against the [OData protocol](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=1031) *OData, version 2* and
*OData, version 4*. This difference can also be manifested by suffixing the name with *_O2* or *_O4*.

> **:information_source: Note**
> In the ABAP Flight Reference Scenario we use another suffixed character *(_R, _M, _D, _U, _C)*. This
> character identifies the development object to belong to one specific development guide (**r**ead-only,
> **m**anaged, **d**raft, **u**nmanaged, service **c**onsumption).

The following list provides an overview of the prefixing and suffixing guidelines on naming specific development objects.

## ABAP Dictionary Objects

### Database Tables

Use a prefix for database tables in scenarios, in which multiple technical representations of the same semantic data is necessary, for example in draft scenarios.

Use the prefix

- *A_* for the persistent database table, the table that contains the active data.
- *D_* for the draft database table.

Example: [_/DMO/A_TRAVEL_D_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=455)

### SQL View (Database View of CDS view)

The SQL view of a CDS view must be defined in the [data definition](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=1025) of a CDS view. <br> 
It cannot have the same name as the CDS view itself. Use the prefix

- *I* (without underscore) for SQL views of CDS interface views.

Example: [_/DMO/ITRAVEL_U_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf) 

## CDS Objects

### CDS Entity

We can use only the CDS View with status as "Released" in SAP S4 HANA Cloud to fetch the data in the ABAP developments and only those can be used in the Custom analytical queries. Those CDS Views can be found in [View Browser](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F2170')/S26OP).

The [Custom CDS Views](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1866A')/S26OP) key user extensibility app can be used to create custom CDS Views for various purposes:
- External APIs define a service that can be consumed externally via OData.
- Cube or Dimension views can be used in analytical scenarios. 
- General custom CDS views can be reused for view building in various scenarios.

With the app, you can create or modify a custom CDS view by, for instance:
- adding fields from multiple data sources.
- creating your own calculated fields.
- refining the properties of the selected fields.
- creating and maintaining parameters for the usage within your view.
- adding filters in order to refine the result set.

### CDS View Names
[The view names](https://help.sap.com/docs/SAP_S4HANA_CLOUD/c0c54048d35849128be8e872df5bea6d/8a8cee943ef944fe8936f4cc60ba9bc1.html) consist of up to four elements:

- Prefix: Indicates the view type, such as *C_* for consumption views or *I_* for composite and basic views.

  | Prefix                | View Type |
  | :-------------------- | :------------ | 
  | I_   | Basic interface view, Composite interface view |
  | C_   | Consumption view |
  | R_   | Basic restricted reuse views, Composite restricted reuse views |
  | P_   | Private view |
  | A_   | Remote API view. The sample of Standard Projection View: *A_MaintenanceNotification* which is created recently. So looking at how they do not use association when doing a projection. They are using "redirected to composition child".  |
  | X_   | View extend <br/> **ZX_C\*_(NUMERIC)** = extend projection view (Scenario: When you want to do developer extensibility by adding custom fields in the fiori apps, the fiori apps will be using the projection view extension.) <br/> **ZX_A\*_(NUMERIC)** = extend API view <br/> **ZX_\*_(NUMERIC)** = extend interface view - Without the ZX_I* because it will affect a lot of old interface views. Best is we have ZX_I\*. |
  | E_   | Extension include view |
  | F_   | Derivation function |
  | D_   | Abstract entity |

- Semantic Name: Describes what the CDS view is about based on the business process.

- Suffix: Specifies the purpose of the CDS, such as "Query," "Cube," or "TP" (for Transactional data processing). 
The following table summarizes the most common suffixes and the respective view types used in the VDM:

  | Suffix                | View Type |
  | :-------------------- | :------------ | 
  | Query, Qry, or Q   | Analytical query view |
  | Cube or C          | Consumption view |
  | Text, Txt, T       | Provider for language-dependent text |
  | TP                 | Transactional processing view |
  | VH or StdVH        | (Standard) value help view |

- Version Number: Used when there are multiple versions of the CDS view.

Example: [_/DMO/I_Travel_U_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=357) , [_/DMO/C_Travel_Processor_M_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=327), C_GoodsMovementQuery_2

### Field Names
Field names are based on business semantics to make their purpose more transparent. They typically fulfill the following criteria:
- Uniformity and avoidance of ambiguity:
The same name for the same entity everywhere; different names for distinct entities.

- Legibility by using camel case: For example, *CostCenter*.

- Avoidance of abbreviations:
Standardized abbreviations can be used if necessary to stay within the 30 character limit.

As a general rule, field names consist of up to 3 main elements, which are illustrated in the following simplified example.

>
> **Example**
> *SalesOrderConfirmationDate*
> 
> The naming elements in the example are broken up and explained in more detail in the following table.
>  | Naming Element | Example | Explanation |
>  | :-------------------- | :------------ | :------------ | 
>  | Object   | SalesOrder | Defines an object class in terms of things in the real world that can be identified with clear boundaries and meanings. | 
>  | Property            | Confirmation | A feature shared by the instances of an object class. | 
>  | Representation term | Date | Indicates the data type represented by the field. | 

The naming of fields is guided by the **representation term**. The names are based on business semantics, which means that the field name clearly indicates what the content of the field refers to. The following table is a non-exhaustive list of different semantic field types with some examples.
| Representation Term | Definition | Example Field Names |
| :-------------------- | :------------ | :------------ | 
| Identifier   | A value identifying an instance of an object. | *BankAccount* (human-readable identifier) <br/> *BankAccountUUID* (technical identifier) | 
| Code   | A value from a range of possible values. | *CorrespondenceLanguage* <br/> *TransactionCurrency* | 
| Indicator   | A value identifying an instance of an object. | *OrderIsReleased* | 
| Amount   | A value identifying an instance of an object. | *TaxAmount*  | 
| Date   | A value identifying an instance of an object. | *GoodsArrivalDate* | 
| Time   | A value identifying an instance of an object. | *ShiftDay1EndTime*   | 
| Date and Time   | A value identifying an instance of an object. | *CreationDateTime*   | 
| Quantity   | A value identifying an instance of an object. | *InspectedProductQuantity*   | 
| Text   | A value identifying an instance of an object. | *GoodsLocationText*   | 
| Duration   | A value identifying an instance of an object. | *ServiceWorkDuration*   | 

> **:information_source: Note**
>If a field name is ambiguous, a qualifier can be added to make the referent clearer, such as CompanyCurrency. Another example is the distinction between two cost centers that are involved in the order processing:
> *SenderCostCenter* and *ReceiverCostCenter*.

### Behavior Definition

A behavior definition has always the same name as the root entity of the business object.

Example: [_/DMO/I_Travel_U_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=357) , [_/DMO/C_Travel_M_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=991)

### Metadata Extension

A metadata extension has the same name as the CDS entity it relates to. If you use more than one metadata<br>
extension for one CDS entity, you can add a numbered suffix.

Example: [_/DMO/I_Travel_U_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=357) , [_/DMO/C_BOOKING_U_M2_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=991)

### CDS Comment Types
The Core Data Services (CDS) syntax enables you to insert comments into object definitions.

[Example: Comment Formats in CDS Object Definitions](https://help.sap.com/docs/SAP_HANA_PLATFORM/4505d0bdaf4948449b7f7379d24d0f0d/7e6f697bf2a84b9bbf0fc1c5110c1210.html)
```js
 namespace com.acme.myapp1;
 
  /**
  *  multi-line comment, 
  *  for doxygen-style, 
  *  comments and annotations
  */
  type Type1 {
     element Fstr:       String( 5000 ); // end-of-line comment
             Flstr:      LargeString;
       /*inline comment*/  Fbin:       Binary( 4000 );
       element Flbin:      LargeBinary;
               Fint:       Integer;
       element Fint64:     Integer64;
               Ffixdec:    Decimal( 34, 34 /* another inline comment */ );
       element Fdec:       DecimalFloat;
               Fflt:       BinaryFloat;
       //complete line comment element Flocdat:    LocalDate;    LocalDate temporarily switched off
       //complete line comment         Floctim:    LocalTime;
       element Futcdatim:  UTCDateTime;
               Futctstmp:  UTCTimestamp;
  };
```

## Business Services

### Service Definition

Since a [service definition](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=1021) - as a part of a business service - does not have different types or <br>
different specifications, there is (in general) no need for a prefix or suffix to differentiate meaning.

Example: [_/DMO/TRAVEL_U_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=435)

However, in use cases where no reuse of the same service definition is planned for UI and API services, the <br>
prefix may follow the rules of the service binding.

Example: [_/DMO/UI_TRAVEL_U_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=991)

### Service Binding

Use the prefix
- *UI_* if the service is exposed as a UI service.
- *API_* if the service is exposed as [Web API](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=1039).

Use the suffix
- *_O2* if the service is bound to OData protocol version 2.
- *_O4* if the service is bound to OData protocol version 4.

Example: [_/DMO/UI_TRAVEL_U_O2_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=992)

## Source Code Objects

### Behavior Pool
Use the prefix

- *BP_* for an ABAP class that implements the behavior of a business object.

Example: [_/DMO/BP_TRAVEL_U_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=378)

### Handler and Saver Classes
Use the prefix

- *LHC_* for a local handler class.
- *LSC_* for a local saver class.

Depending on the modularization of your behavior implementation, you can provide the semantics of the coding in the name of the classes.

Example: [_LHC_TRAVEL_CREATE_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=992)

Example: [_LHC_BOOKING_CUD_](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf#page=992)

## OData API
1. Identify OData APIs from [Business Accelerator Hub](https://api.sap.com/).
