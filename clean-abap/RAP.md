## Content

- [Names](#names)
  - [Naming Conventions for Development Objects](#naming-conventions-for-development-objects)

## Names

#### Naming Conventions for Development Objects

Naming conventions facilitate the development. An addition to the name of development objects conveys
standardized meaning and generates consistency in your development.

General Rules
> Remember
The general guideline for development objects is the following: [/<namespace>/][<prefix>]_<object_name>_[<suffix>].
● Use your own namespace that is reserved for your organization.

> Note
  Consider that the namespace /DMO/ is reserved for demo purposes. Do not use this namespace in
  your productive development.

● A prefix is used for cases when there are generically different types of one development object. Then, this
prefix states the semantic difference that cannot be conveyed through the object type.
For example, a service binding can expose an OData service for UI purposes and as a Web API [page 1039].
That is why, for service bindings we introduce the prefixes UI_ and API_ to differentiate the semantics of
service bindings.
● A suffix is used for additional differentiation between different types of development objects. It helps to
recognize more subtle or secondary differences in development objects.
For example, a UI service can be bound against the OData protocol [page 1031] OData, version 2 and
OData, version 4. This difference can also be manifested by suffixing the name with _O2 or _O4.

> Note
  In the ABAP Flight Reference Scenario we use another suffixed character (_R, _M, _D, _U, _C). This
  character identifies the development object to belong to one specific development guide (read-only,
  managed, ddraft, unmanaged, service consumption).

The following list provides an overview of the prefixing and suffixing guidelines on naming specific development
objects.

ABAP Dictionary Objects

1. Database Tables
Use a prefix for database tables in scenarios, in which multiple technical representations of the same semantic
data is necessary, for example in draft scenarios.
Use the prefix
● A_ for the persistent database table, the table that contains the active data.
● D_ for the draft database table.
Example: /DMO/A_TRAVEL_D

2. SQL View (Database View of CDS view)
The SQL view of a CDS view must be defined in the data definition [page 1025] of a CDS view. It cannot have the
same name as the CDS view itself. Use the prefix
● I (without underscore) for SQL views of CDS interface views.
Example: /DMO/ITRAVEL_U

CDS Objects

1. CDS Entity
Use the prefix
● I_ for an interface view.
● C_ for a projection view. The character C represents the consumption layer. If there are multiple projections
of one CDS entity, the object name should semantically represent the projection role.
Example: /DMO/I_Travel_U, /DMO/C_Travel_Processor_M

2. Behavior Definition
A behavior definition has always the same name as the root entity of the business object.
Example: /DMO/I_Travel_U, /DMO/C_Travel_M

3. Metadata Extension
A metadata extension has the same name as the CDS entity it relates to. If you use more than one metadata
extension for one CDS entity, you can add a numbered suffix.
Example: /DMO/C_TRAVEL_U, /DMO/C_BOOKING_U_M2

Business Services

1. Service Definition
Since a service definition [page 1021] - as a part of a business service - does not have different types or
different specifications, there is (in general) no need for a prefix or suffix to differentiate meaning.
Example: /DMO/TRAVEL_U
However, in use cases where no reuse of the same service definition is planned for UI and API services, the
prefix may follow the rules of the service binding.
Example: /DMO/UI_TRAVEL_U

2. Service Binding
Use the prefix
● UI_ if the service is exposed as a UI service.
● API_ if the service is exposed as Web API [page 1039].
Use the suffix
● _O2 if the service is bound to OData protocol version 2.
● _O4 if the service is bound to OData protocol version 4.
Example: /DMO/UI_TRAVEL_U_O2

Source Code Objects

1. Behavior Pool
Use the prefix
● BP_ for an ABAP class that implements the behavior of a business object.
Example: /DMO/BP_TRAVEL_U

2. Handler and Saver Classes
Use the prefix
● LHC_ for a local handler class.
● LSC_ for a local saver class.
Depending on the modularization of your behavior implementation, you can provide the semantics of the
coding in the name of the classes.
Example: LHC_TRAVEL_CREATE
Example: LHC_BOOKING_CUD