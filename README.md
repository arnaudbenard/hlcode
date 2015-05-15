# hlcode

Utility for syntax highlighting in Keynote. 


## Installation

You have install highlight on your machine

```
brew install highlight
```

Install the CLI globally
```
npm install hlcode -g
```


## Usage

Specify a file with `-f`

```
hlcode -f script.js
```

Or highlight the clipboard data with the right syntax

```
hlcode -s js
```

Finally, paste your highlighted code to Keynote.

## Supported languages

[Source](http://www.andre-simon.de/doku/highlight/en/langs.php)

```
NAME                            File extensions

ABAP/4                        : abap4 ( abp )
Advanced Backus-Naur Form     : abnf
Action Script                 : actionscript ( as )
ADA95                         : ada ( a adb ads gnad )
Agda                          : agda
AMPL                          : ampl ( dat run )
AMTrix                        : amtrix ( hnd s4 s4h s4t t4 )
AppleScript                   : applescript
Arc                           : arc
ARM                           : arm
ASCEND                        : ascend ( a4c )
ASP                           : asp ( asa )
Abstract                      : aspect ( was wud )
Assembler                     : assembler ( asm )
Applied Type System           : ats ( dats )
AutoHotKey                    : autohotkey ( ahk )
AutoIt                        : autoit ( au3 )
Avenue                        : avenue
(G)AWK                        : awk
DOS Batch                     : bat ( cmd )
BBcode                        : bbcode
BibTeX                        : bibtex ( bib )
Bison                         : bison ( y )
Blitz Basic                   : blitzbasic ( bb )
BM Script                     : bms
Backus-Naur Form              : bnf
Boo                           : boo
C and C++                     : c ( c++ cc cpp cxx h hh hpp hxx )
CHILL                         : chill ( chl )
Clean                         : clean ( icl )
ClearBasic                    : clearbasic ( cb )
Clipper                       : clipper
Clojure                       : clojure
Clips                         : clp
COBOL                         : cobol ( cbl cob )
ColdFusion MX                 : coldfusion ( cfc cfm )
C#                            : csharp ( cs )
CSS                           : css
D                             : d
Diff                          : diff ( patch )
Dylan                         : dylan
Extended Backus-Naur Form     : ebnf
Eiffel                        : eiffel ( e se )
Erlang                        : erlang ( erl hrl )
Euphoria                      : euphoria ( eu ew ex exw wxu )
Express                       : express ( exp )
FAME                          : fame ( inp )
Felix                         : felix ( flx )
Fortran 77                    : fortran77 ( f for ftn )
Fortran 90                    : fortran90 ( f90 f95 )
Frink                         : frink
F#                            : fsharp ( fs fsx )
Go                            : go
Graphviz                      : graphviz ( dot )
Haskell                       : haskell ( hs )
haXe                          : haxe ( hx )
Hecl                          : hcl
HTML                          : html ( htm xhtml )
Apache Config                 : httpd
Icon                          : icon ( icn )
IDL                           : idl
Interactive Data Language     : idlang
Lua (for LuaTeX)              : inc_luatex
Informix                      : informix ( 4gl )
INI                           : ini
Inno Setup                    : innosetup ( iss )
INTERLIS                      : interlis ( ili )
IO                            : io
Jasmin                        : jasmin ( j )
Java                          : java ( groovy grv )
Javascript                    : js
JSP                           : jsp
LDAP                          : ldif
Haskell LHS                   : lhs
Lilypond                      : lilypond ( ly )
Linden Script                 : lindenscript ( lsl )
Lisp                          : lisp ( cl clisp el lsp sbcl )
Logtalk                       : logtalk ( lgt )
Lotos                         : lotos
Lotus                         : lotus ( ls )
Lua                           : lua
Luban                         : luban ( lbn )
Make                          : make ( mak mk )
Maple                         : maple ( mpl )
Matlab                        : matlab ( m )
Maya                          : maya ( mel )
Mercury                       : mercury
Miranda                       : miranda
Modula2                       : mod2 ( def mod )
Modula3                       : mod3 ( i3 m3 )
Modelica                      : modelica ( mo )
MaxScript                     : ms
MSSQL                         : mssql
Nasal                         : nasal ( nas )
NeXT Byte Codes               : nbc
Nemerle                       : nemerle ( n )
NetRexx                       : netrexx ( nrx )
Nice                          : nice
NSIS                          : nsis ( nsi )
Not eXactly C                 : nxc
Oberon                        : oberon ( ooc )
Objective C                   : objc
Objective Caml                : ocaml ( ml mli )
Octave                        : octave
Open Object Rexx              : oorexx
Object Script                 : os
Oz                            : oz
Paradox                       : paradox ( sc )
Pascal                        : pas
Perl                          : perl ( cgi perl pl plex plx pm )
PHP                           : php ( php3 php4 php5 php6 )
Pike                          : pike ( pmod )
PL/1                          : pl1 ( bdy ff fp fpp rpp sf sp spb spe spp sps wf wp wpb wpp wps )
POV-Ray                       : pov
Prolog                        : pro
Progress                      : progress ( i p w )
PostScript                    : ps
Microsoft PowerShell          : ps1
PATROL                        : psl
Pure                          : pure
Pyrex                         : pyrex ( pyx )
Python                        : python ( py )
Qore                          : q
QMake Project                 : qmake
Qu                            : qu
R                             : r
Rebol                         : rebol
Rexx                          : rexx ( rex rx the )
Relax NG                      : rnc
Ruby                          : ruby ( pp rb rjs ruby )
PowerPC Assembler             : s
SAS                           : sas
Scala                         : scala
Scilab                        : scilab
Bash                          : sh ( bash ebuild eclass )
SMALL                         : small ( sma )
Smalltalk                     : smalltalk ( gst sq st )
Standard ML                   : sml
SNMP                          : snmp
SNOBOL                        : snobol ( sno )
RPM Spec                      : spec
SPIN SQL                      : spn
PL/SQL                        : sql
Squirrel                      : squirrel ( nut )
Sybase SQL                    : sybase
Tcl/Tk                        : tcl ( itcl wish )
TCSH                          : tcsh
Regex tests                   : test_re
TeX and LaTeX                 : tex ( cls sty )
TTCN3                         : ttcn3
Plain text                    : txt
Vala                          : vala
Visual Basic                  : vb ( bas basic bi vbs )
Verilog                       : verilog ( v )
VHDL                          : vhd
XML                           : xml ( dtd ecf ent hdr hub jnlp nrm sgm sgml svg tld vxml wml xsl )
SuperX++                      : xpp
Yaiff                         : yaiff
Zonnon                        : znn
```
