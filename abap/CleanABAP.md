# Clean ABAP

## KEY USER EXTENSIBILITY
1. When creating fields in [Custom Fields](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1481')/S26OP), the [naming conventions](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/8308e6d301d54584a33cd04a9861bc52/aca8c2682d284f2185873b14f838f7eb.html#loioaca8c2682d284f2185873b14f838f7eb__Create_cust_field) should follow as below:
    - **Custom Responsibility Definition Name**: must start with either **'Y_'** or **'Z_'**.
    - **CDS View Name**: a CDS view from the include list.
    - **CDS Field Name**: the custom field created (name must start with **'YY1_'**) or a field of a CDS view from the include list.
    - **Responsibility Definition External Name**: the name must start with **'Z_'** and should not contain a space
        > **:information_source: Note** <br>
        > Recommend using camel case (CamelCase) for better readability.

## DEVELOPER EXTENSIBILITY
1. To enable custom classes to be able to use in [Custom Logic](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1481')/S26OP), [the step](https://blogs.sap.com/2020/07/23/want-to-use-custom-classes-and-custom-cds-views-inside-in-app-badi-aka-custom-logic/) requires setting the class to release state.
    ![Setting Custom Class to Release State](/images/setting-custom-class-to-released.png "Setting Custom Class to Release State")

### Naming Convention of Custom Class
To ensure efficient logic implementation using **Custom Logic**, it is recommended to maintain codes and create a custom class within **Eclipse ADT**. Within the enhancement implementation, the custom class should be invoked.

- The custom class should follow the name of the badi
        ![Cloud BAdI](/images/cloud-badi.png "Cloud BAdI")
        ![Custom Class Namings](/images/custom-class-namings.png "Custom Class Namings")

### Cheat Sheet:
- [Standard ABAP Objects vs CDS Views](https://community.sap.com/t5/technology-blogs-by-members/smooth-transition-to-abap-for-cloud-development-cheat-sheet/ba-p/13571567)

## ABAP AUTOMATED TESTSCRIPT
[Open SAP ABAP Unit Testing](https://open.sap.com/courses/wtc1.OpenSAP+WTC1_W1U5+Writing+Testable+Code+for+ABAPComent)

