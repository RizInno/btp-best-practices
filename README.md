# SAP BTP Best Practices

## PREREQUISITES

1. Setup [ABAPGit](https://docs.abapgit.org/user-guide/getting-started/install.html#prerequisites).
  ![ABAPGit](/images/abapgit.png "ABAPGit")
2. Setup ABAP Cleaner.

### ABAP Cleaner
[ABAP Cleaner](https://github.com/SAP/abap-cleaner) is a tool in SAP ABAP (Advanced Business Application Programming) that helps developers improve the quality and maintainability of their ABAP code. It is designed to identify and fix common coding issues, such as unused variables, dead code, syntax errors, and other potential problems.

The ABAP Cleaner tool performs static code analysis on ABAP source code and provides suggestions for code improvements. It can be used to automatically clean up and optimize ABAP programs, making them more efficient and easier to understand.

#### Guidelines to Writing Clean Codes
- [Clean ABAP Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md), 
- [Clean Code Checks](https://github.com/SAP/code-pal-for-abap/blob/master/docs/check_documentation.md), 
  as implemented in the [Code Pal for ABAP](https://github.com/SAP/code-pal-for-abap/) project

#### Requirements and Installation

To install and use the **ABAP cleaner plug-in for ABAP Development Tools** (ADT) on Windows or macOS, 

1. Install ABAP Development Tools as described in the [Install ADT Tutorial (Step 1)](https://developers.sap.com/tutorials/abap-install-adt.html),
   using an Eclipse installation that is [compatible with ADT](https://tools.hana.ondemand.com/).

2. Start ADT, select menu 'Help / Install New Software...', 
   copy the link https://sap.github.io/abap-cleaner/updatesite to the 'Work with' field, press Enter 
   and follow the installation steps, confirming to install ABAP cleaner (content is currently unsigned). ([Known issues](docs/installation-issues.md))
    
    ![ABAP Cleaner plug-in for ABAP Development Tools - installation](/images/adt-installation.png "ABAP Cleaner plug-in for ABAP Development Tools - installation")

3. After restarting ADT, open an ABAP code document in an editor, and use the menu 
   'Source Code / Clean Up With Interactive ABAP Cleaner...' 
   (shortcuts *Ctrl + 4* or *Ctrl + Shift + 4*), see [usage](docs/usage.md).

4. Once installed go to Clean Up With Interactive ABAP Cleaner > Configure > then activate all the rules.

    ![ABAP Cleaner Rules Activation](/images/abap-cleaner-profile-and-rules.png "ABAP Cleaner Rules Activation")

The **stand-alone version of ABAP cleaner** (for Windows, macOS or Linux) 
requires Java 17 or 11 (e.g. [SapMachine](https://sap.github.io/SapMachine/) or [Adoptium Temurin](https://adoptium.net/)). 
To install the stand-alone version, please download and extract the latest [Release](../../releases) 
and follow the installation instructions given there.