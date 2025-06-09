---
title: UT01 Sistemas de Ficheros
icon: circle-info
---
# Tema 1: Sistemas de almacenamiento de información

**RESULTADOS DE APRENDIZAJE**
> *R.A.1.* Reconoce los elementos de las bases de datos analizando sus funciones y valorando la utilidad de sistemas gestores.

> [!info] 
> **Caso Práctico**
>
> A la empresa **BK Sistemas Informáticos** le ha surgido un nuevo proyecto a desarrollar para un pequeño taller mecánico.
>
>El analista del que dispone la empresa ha estado hablando con ellos y ha concluido que su actividad consiste en la reparación de vehículos de todas las marcas tanto de mecánica, como de chapa y pintura y electricidad.
>
>Desde el taller le han comentado que necesitarán guardar y extraer información como:
>
> 1. Los datos de los clientes del taller.
> 2. Las reparaciones más habituales que se realizan en cada modelo y marca.
> 3. Controlar la entradas y salidas de piezas para las reparaciones y su coste.
> 4. El beneficio que se obtiene con cada tipo de reparación, etc.
>
> Por tanto, desde **BK Sistemas Informáticos** se ponen manos a la obra, sabiendo que la información obtenida sea adecuada, oportuna y útil depende de que las decisiones que se tomen sean acertadas o no.

## 1. Introducción

Desde tiempos remotos, los datos han sido registrados por el hombre en algún tipo de soporte (piedra, papel, madera, barro, etc) a fin de que quedara constancia de un fenómeno o idea.

![tablilla](https://upload.wikimedia.org/wikipedia/commons/a/ad/Tablilla_de_barro_contable.jpg)

Esta necesidad no ha variado y, en la actualidad, para tomar decisiones acertadas en cualquier actividad económica  se requiere manejar una buena **información** que se obtendrá a partir de  los **datos.** Entendemos los datos como hechos aislados. Cuando los datos se organizan y se tratan de obtiene **información**.

En nuestro día a día, para manejar los datos con eficacia utilizaremos una **base de datos**, que nos ayudará a almacenar y procesar esos datos, extraer la información necesaria y tomar decisiones.

![](https://upload.wikimedia.org/wikipedia/commons/f/fd/Inside_a_Post_Office_Savings_Bank_deposit_book.jpg)

Las bases de datos han evolucionado a partir de los **sistemas de archivos** que presentaban una serie de problemas y limitaciones que actualmente han sido superados, hasta llegar a los actuales sistemas de minería de datos y bibliotecas de análisis. 

Dentro de las bases de datos existen distintos modelos con sus ventajas e inconvenientes. Actualmente el modelo más extendido es el **modelo relacional**.

Aunque los sistemas de bases de datos proporcionan una visión de alto nivel de los datos, al final los datos se tienen que almacenar como bits en uno o varios dispositivos de almacenamiento. Una amplia mayoría de las bases de datos de hoy en día almacenan los datos en discos magnéticos y los extraen a la memoria del espacio principal para su procesamiento. La estructura lógica y los métodos de acceso a los datos pueden variar en función del tipo de dato a guardar, de las necesidades de velocidad de recuperación de esos datos y de su importancia. 

## 2. Información y datos

Antes de nada, debemos comprender en qué se diferencia el **conocimiento** de los **datos** y de la **información**. En una conversación informal, los tres términos suelen utilizarse indistintamente y esto puede llevar a una interpretación libre del concepto de conocimiento. 

Quizás la forma más sencilla de diferenciar los términos sea pensar que los datos están localizados en el mundo y el conocimiento está localizado en agentes de cualquier tipo, mientras que la información adopta un papel mediador entre ambos. Un agente no equivale a un ser humano. Podría tratarse de un animal, una máquina o una organización constituida por otros agentes a su vez.

#### **Dato**


> *Datos son hechos conocidos que pueden registrarse y que tienen un significado implícito.*
> 
> – **Ramez Elmasri y Shamkant B. Navathe**
 

Un dato es un conjunto discreto, de factores objetivos sobre un hecho real. Dentro de un contexto
empresarial, el concepto de dato es definido como un registro de transacciones. Un dato no dice nada sobre el porqué de las cosas, y por sí mismo tiene poca o ninguna relevancia o propósito.

Los datos describen únicamente una parte de lo que pasa en la realidad y no proporcionan juicios de valor o interpretaciones, y por lo tanto no son orientativos para la acción. La toma de decisiones se basará en datos, pero estos nunca dirán lo que hacer. Los datos no dicen nada acerca de lo que es importante o no. A pesar de todo, los datos son importantes para las organizaciones, ya que son la base para la creación de información.

“los datos del censo; el análisis aportó datos de gran interés respecto a la génesis de esta fobia; cada ficha contiene los datos comerciales, fiscales y estadísticos de cada proveedor; estos datos configuran una densidad de población débil, aunque ello no descarta que haya núcleos muy poblados y muchas regiones vacías”

El significado de un dato cambia dependiendo dentro del contexto en que se encuentre.

- Considere el número **25…**
- Ahora… **25 “Kilos”**
- Y ahora… **25 “kilos” de “patatas”**
- Finalmente… **25 “kilos” de “patatas” en “mercado” de “Concepción”**

  
#### **Información**

Como han hecho muchos investigadores que han estudiado el concepto de información, lo
describiremos como un mensaje, normalmente bajo la forma de un documento o algún tipo de
comunicación audible o visible. Como cualquier mensaje, tiene un emisor y un receptor. La información es capaz de cambiar la forma en que el receptor percibe algo, es capaz de impactar sobre sus juicios de valor y comportamientos. Tiene que informar; son datos que marcan la diferencia.

La palabra *“informar”* significa originalmente *“dar forma a “* y la información es capaz de formar a la persona que la consigue, proporcionando ciertas diferencias en su interior o exterior. Por lo tanto,
estrictamente hablando, es el receptor, y no el emisor, el que decide si el mensaje que ha recibido es realmente información, es decir, si realmente le informa. 

Un informe lleno de tablas inconexas, puede ser considerado información por el que lo escribe, pero a su vez puede ser juzgado como “ruido” por el que lo recibe.

A diferencia de los datos, la información tiene significado (relevancia y propósito). No sólo puede formar potencialmente al que la recibe, sino que esta organizada para algún propósito. Los datos se convierten en información cuando su creador les añade significado. 

Transformamos datos en información añadiéndoles valor en varios sentidos. Hay varios métodos:

• **Contextualizando**: sabemos para qué propósito se generaron los datos.
• **Categorizando**: conocemos las unidades de análisis de los componentes principales de los datos.
• **Calculando**: los datos pueden haber sido analizados matemática o estadísticamente.
• **Corrigiendo**: los errores se han eliminado de los datos.
• **Condensando**: los datos se han podido resumir de forma más concisa.

#### **Conocimiento**

La mayoría de la gente tiene la sensación intuitiva de que el conocimiento es algo más amplio, más profundo y más rico que los datos y la información.

Vamos a intentar realizar una primera definición de conocimiento que nos permita comunicar que queremos decir cuando hablamos de conocimiento dentro de las organizaciones.

Para *Davenport y Prusak (1999)* el conocimiento es “*una mezcla de experiencia, valores, información y “saber hacer” que sirve como marco para la incorporación de nuevas experiencias e información, y es útil para la acción. Se origina y aplica en la mente de los conocedores.”* 

En las organizaciones con frecuencia no sólo se encuentra dentro de documentos o almacenes de datos, sino que también esta en rutinas organizativas, procesos, prácticas, y normas.

Lo que inmediatamente deja claro la definición es que ese conocimiento no es simple. Es una mezcla de varios elementos; es un flujo al mismo tiempo que tiene una estructura formalizada; es intuitivo y difícil de captar en palabras o de entender plenamente de forma lógica. El conocimiento existe dentro de las personas, como parte de la complejidad humana y de nuestra impredecibilidad. El conocimiento puede ser visto como un proceso (flujo) o como algo acumulado.

El conocimiento se deriva de la información, así como la información se deriva de los datos. Para que la información se convierte en conocimiento, las personas deben hacer prácticamente todo el trabajo.

## 3. Sistemas de almacenamiento de la información

### 3.1. Evolución de los sistemas de almacenamiento de la información

Aunque, como hemos visto al inicio del tema, existen referencias a diferentes elementos y sistemas para el almacenamiento de la información desde los inicios de la historia, en este punto pasaremos a estudiar aquellos sistemas generados de manera informática.

### 3.1.1. Orígenes de los Sistemas de Gestión de Bases de Datos

Los *sistemas de gestión de bases de datos* (en inglés DBMS) surgieron por primera vez en la década de 1960, cuando las empresas y organizaciones comenzaron a reconocer la necesidad de soluciones efectivas para la gestión de datos. 

En los primeros sistemas de bases de datos, a menudo denominados sistemas basados en archivos, los datos se almacenaban y recuperaban utilizando archivos planos. Estos sistemas carecían de la escalabilidad y flexibilidad necesarias para adaptarse a las cambiantes necesidades de las organizaciones, y estaban desactualizados e inflexibles.



**Hitos Clave:** La introducción de los modelos jerárquico y de red en las décadas de 1960 y 1970 marcaron hitos importantes en la evolución de los DBMS. Estos modelos proporcionaron estructuras jerárquicas y en red para organizar y acceder a los datos, sentando las bases para tecnologías de bases de datos más sofisticadas.



Los primeros modelos en surgir fueron:

**Modelo Jerárquico:** En el modelo jerárquico, los datos se organizan en una estructura similar a un árbol con relaciones padre-hijo entre los registros. Este modelo fue popularizado por el sistema de gestión de información (IMS) de IBM y proporcionó acceso eficiente a estructuras de datos jerárquicas como organigramas y listas de materiales.

**Modelo de Red:** El modelo de red introdujo el concepto de conjuntos y relaciones entre los registros, permitiendo estructuras de datos más complejas. Este modelo se implementó en sistemas de bases de datos como CODASYL (Conferencia sobre Lenguajes de Sistemas de Datos) y proporcionó mayor flexibilidad para representar datos interconectados.

#### 3.1.2. Ascenso de las Bases de Datos Relacionales

La década de 1970 fue testigo de un avance revolucionario con el desarrollo de los *sistemas de gestión de bases de datos relacionales (RDBMS)*, pioneros por Edgar F. Codd. Las bases de datos relacionales introdujeron **tablas, filas y columnas**, junto con el lenguaje de consulta estructurado (SQL) que permite la manipulación y consulta de datos.

El modelo relacional ofreció varias innovaciones clave, como la independencia de datos, el lenguaje de consulta declarativo y el soporte para transacciones ACID. Estas características hicieron que las bases de datos relacionales fueran más flexibles, escalables y adecuadas para una amplia gama de aplicaciones en diversas industrias.

**Álgebra Relacional:** El álgebra relacional de Codd proporcionó una base teórica para las bases de datos relacionales, definiendo operaciones como selección, proyección, unión y unión. Este marco algebraico permitió a los desarrolladores realizar manipulaciones de datos complejas utilizando consultas simples y declarativas.

### 3.1.3. Surgimiento de las Bases de Datos NoSQL

La aparición de las *bases de datos NoSQL* (Not Only SQL) a principios de la década de 2000 fue impulsada por el crecimiento exponencial de los datos en la era digital y la demanda de soluciones de almacenamiento de datos escalables y de alto rendimiento. Las bases de datos NoSQL proporcionaron alternativas a las bases de datos relacionales tradicionales, ofreciendo opciones para diversos tipos de datos, volúmenes y necesidades de procesamiento.

**Tipos de Bases de Datos NoSQL:** Las bases de datos NoSQL abarcan varios tipos, incluidos las orientadas a documentos, las de clave-valor, las de familia de columnas y las de grafos. Cada tipo está optimizado para casos de uso específicos, como el modelado flexible de datos, las arquitecturas distribuidas y la alta disponibilidad.

**Bases de Datos Orientadas a Documentos:** Las bases de datos orientadas a documentos, como MongoDB y Couchbase, almacenan datos en documentos flexibles y sin esquema, generalmente en formato JSON o BSON. Estas bases de datos son adecuadas para manejar datos semiestructurados y casos de uso como la gestión de contenido, los perfiles de usuario y los catálogos de productos.

**Almacenes de Clave-Valor:** Los almacenes de clave-valor, como Redis y Amazon DynamoDB, almacenan datos como pares clave-valor y ofrecen acceso rápido y escalable a datos de acceso frecuente. Estas bases de datos son ideales para el almacenamiento en caché, la gestión de sesiones y las aplicaciones de análisis en tiempo real.

### 3.1.4. Evolución de las Bases de Datos Distribuidas

Las bases de datos distribuidas, que abarcan múltiples nodos, regiones o centros de datos, son una evolución de los sistemas distribuidos impulsada por la proliferación de los big data, la computación en la nube y los sistemas distribuidos. Las bases de datos distribuidas permiten a las organizaciones procesar y analizar enormes volúmenes de datos en entornos distribuidos, gracias a su escalabilidad, tolerancia a fallos y disponibilidad global.

**Tipos de Bases de Datos Distribuidas:** Las bases de datos distribuidas se presentan en diversas formas, como las bases de datos fragmentadas, las bases de datos replicadas y las bases de datos multimodelo. Estas bases de datos aprovechan las arquitecturas distribuidas, las técnicas de replicación y los algoritmos de consenso para garantizar la coherencia y la disponibilidad de los datos.

**Bases de Datos Fragmentadas:** La fragmentación implica dividir los datos en fragmentos más pequeños y manejables y distribuirlos en múltiples nodos o clústeres. Cada fragmento opera de forma independiente, lo que permite la escalabilidad horizontal y mejora el rendimiento. Las bases de datos fragmentadas, como Google Bigtable y Apache Cassandra, son adecuadas para manejar conjuntos de datos masivos y cargas de trabajo de alto rendimiento.

**Bases de Datos Replicadas:** La replicación implica mantener copias de los datos en múltiples nodos o centros de datos para garantizar la disponibilidad de los datos y la tolerancia a fallos. Las bases de datos replicadas, como Apache HBase y Amazon Aurora, utilizan técnicas como la replicación maestro-esclavo y la replicación multimaestro para sincronizar los datos entre las réplicas y manejar escenarios de conmutación por error.

### 3.1.5. Tendencias e Innovaciones Futuras

Se espera que los desarrollos en las bases de datos blockchain, las bases de datos en memoria y las bases de datos federadas impulsen el desarrollo de los sistemas de gestión de bases de datos (DBMS) en el futuro. Las bases de datos blockchain son ideales para aplicaciones que requieren seguridad, confianza y transparencia, ya que proporcionan almacenamiento de datos descentralizado, inmutable y transparente.

**Bases de Datos en Memoria:** Las bases de datos en memoria aprovechan la memoria principal para almacenar y procesar datos, lo que proporciona un rendimiento ultrarrápido y análisis en tiempo real. Estas bases de datos son adecuadas para el procesamiento de transacciones de alta velocidad, el almacenamiento de datos en tiempo real y las aplicaciones de análisis.

**Bases de Datos Federadas:** Las bases de datos federadas permiten la integración y consulta sin fisuras de datos en fuentes y plataformas de datos heterogéneas. Estas bases de datos aprovechan el procesamiento de consultas distribuidas, la virtualización de datos y la gestión de metadatos para proporcionar una vista unificada de los datos de fuentes dispares.

## 4. Ficheros

### **4.1. Conceptos sobre ficheros.**
>i
> Un **fichero** es una unidad de **almacenamiento lógico no volátil** que agrupa un conjunto de **informaciones relacionada** entre sí **bajo un mismo nombre**.


**CUIDADO:** El nombre fichero es utilizado, normalmente en informática, como sinónimo de archivo, aceptándose el nombrado de estas estructuras de ambas formas en casi todos los textos científicos.


Es importante comprender los tres conceptos que la definición da: volatilidad, almacenamiento lógico y la relación de la información que en él se mantiene. 

El sistema operativo es el encargado de gestionar el sistema de ficheros y directorios. El sistema de gestión de ficheros ofrece a los usuarios una visión lógica del fichero formada por una cadena ordenada de bytes que tiene asociado un puntero, ocultando la estructura física y organización del mismo en la memoria.
💡

¿Qué es un puntero? Un puntero es una variable de memoria que contiene la dirección física de una posición/zona de concreta de la memoria del sistema. Puedes leer más sobre este concepto [aquí](https://es.wikipedia.org/wiki/Puntero_(inform%C3%A1tica))


Las operaciones de escritura y lectura se realizan a partir de dicho puntero, que queda incrementado en el número de *bytes* de la operación. De esta forma, lecturas o escrituras sucesivas afectan a zonas consecutivas del fichero

![image.png]()

La ventaja de la visión lógica como cadena de bytes tiene la ventaja de ser muy simple y permite a las aplicaciones acomodar cualquier estructura interna de fichero que se desee, entre las que se pueden destacar la **estructura en registros de tamaño fijo o variable, o la estructura en árbol**

### 4.2. Estructuras internas de los ficheros y operaciones con ellos

Los archivos, como herramienta para almacenar información, tomaron la terminología del mundo de la oficina empresarial. Así la palabra **dato** hace referencia a un valor sea un número o un texto o cualquier otro tipo de datos almacenable.

Cuando podemos distinguir datos referidos a una misma propiedad real a la que podemos poner un nombre, hablamos de **campos**. Así: *Sánchez*, *Rodríguez*, *Serrat* y *Crespo* son datos que perfectamente podrían encajar en un campo llamado *Primer Apellido*.

Los datos que se refieren al mismo elemento real (una persona, una factura, un movimiento bancario,…) se agrupan en **registros**. En un fichero de datos personales, cada registro sería una persona; cada campo sería cada propiedad distinguible en la persona.

En general sobre los archivos se pueden realizar las siguientes operaciones:

- **Abrir** (*open*). Prepara el fichero para su proceso.
- **Cerrar** (*close*). Cierra el fichero impidiendo su proceso inmediato.
- **Leer** (*read*). Obtiene información del fichero.
- **Escribir** (*write*). Graba información en el fichero.
- **Posicionarse** (*seek*). Coloca el puntero de lectura en una posición concreta del mismo (no se puede realizar en todos los tipos de ficheros).
- **Comprobar fin de fichero** (*eof*). Indica si hemos llegado al final del fichero.

A continuación se introducen una serie de esquemas para una mejor comprensión de cómo es internamente la estructura de los ficheros en función del tamaño de los registros y la forma en la que se guardan.

#### 4.2.1. Clasificación en función del **tamaño de los registros**

**a.Ficheros con Registros de tamaño fijo** 

![image.png](./images/image%201.png)

**b. Ficheros con Registros de tamaño variable**

![image.png]()

**c. Ficheros con Registros en estructura de árbol**

![image.png]()

Un problema de los ficheros de registros es la búsqueda de un determinado registro, operación muy común en la utilización de estos ficheros. Para una búsqueda rápida se deben mantener los registros ordenados. 

Esta solución presenta dos graves inconvenientes. 

Por un lado, la inserción y eliminación de registros es muy costosa, puesto que requiere mover un gran número de registros para mantener la ordenación correcta. 

Por otro lado, sólo se pueden ordenar los registros por un campo, lo que da lugar a un único criterio de búsqueda optimizado.

#### 4.2.2. Clasificación en función de la forma de acceso a la información

**a. Ficheros secuenciales**

En estos ficheros, los datos se organizan secuencialmente en el orden en el que fueron grabados. Para leer los últimos datos hay que leer los anteriores. Es decir leer el registro número nueve, implica leer previamente los ocho anteriores.

| **Ventajas** |
| --- |
| Rápidos para obtener registros contiguos de una base de datos |
| No hay huecos en el archivo al grabarse los datos seguidos, datos más compactos. |

| **Desventajas** |
| --- |
| Consultas muy lentas al tener que leer todos los registros anteriores en el orden del archivo respecto al que queremos leer. Es decir, que si queremos leer el quinto registro, hay que leer los cuatro anteriores. |
| Algoritmos de lectura y escritura complejos. No es fácil hacer operaciones avanzadas con los datos |
| No se pueden eliminar registros del fichero (se pueden marcar de manera especial para que no sean tenidos en cuenta, pero no se pueden borrar) |
| El borrado provoca archivos que no son compactos |
| La ordenación de los datos requiere leer todos los datos, reorganizarlos en memoria y volver a grabarles en el archivo en el orden correcto. Se trata de una operación excesivamente lenta |

**b. Ficheros de acceso directo o aleatorio**

En estos ficheros se puede leer una posición concreta directamente; bastará saber la posición exacta (normalmente en bytes) del dato a leer para obtenerle. Es decir, posicionarnos en el quinto registro se haría de golpe, con una sola instrucción. Lo único que necesitamos saber el tamaño de cada registro, que en este tipo de ficheros debe de ser el mismo. Suponiendo que cada registro ocupa 100 bytes, el quinto registro comenzará en la posición 400. A partir de esa posición podremos leer todos los datos del registro.

![](https://jorgesanchez.net/manuales/gbd/sgbd-web-resources/image/13.png)

| **Ventajas** |
| --- |
| Acceso rápido a un registro concreto. No necesita leer los datos anteriores |
| La modificación de datos es más sencilla |
| Permiten acceso secuencial además del aleatorio (por lo que mejoran el caso anterior) |
| Permiten tanto leer como escribir sin necesidad de cerrar el archivo |
| Aptos para organizaciones **relativas directas**, en las que la clave del registro se relaciona con su posición en el archivo |

| **Desventajas** |
| --- |
| Salvo en archivos relativos directos, no es apto por sí mismo para usar en bases de datos, ya que los datos se organizan en base a una clave que casi nunca coincide con la posición del registro en el archivo |
| No se pueden borrar datos (sí marcar para borrado, pero generarán huecos) |
| Las consultas sobre multitud de registros son más lentas que en el caso anterior |

**c. Ficheros secuenciales encadenados**

Son ficheros con registros grabados secuencialmente que podríamos recorrer registro a registro o de forma aleatoria. Además cada registro posee un campo que contiene la dirección de otro registro (a este tipo de campos se les llama **punteros**). Cada registro usa su puntero para indicar la dirección del siguiente registro. Usando los punteros podremos recorrer los registros en un orden concreto.

Cuando aparece un nuevo registro, se añade al final del archivo, pero los punteros se reordenan para que se mantenga el orden.

![](https://jorgesanchez.net/manuales/gbd/sgbd-web-resources/image/14.png)

| **Ventajas** |
| --- |
| El fichero mantiene el orden en el que se añadieron los registros y un segundo orden en base a una clave. Incluso añadiendo más punteros a cada registro podremos establecer más formas de ordenar los registros. |
| La modificación de datos es más sencillaLa operación de ordenación no requiere reorganizar todo el fichero, sino sólo modificar los punteros |
| Posee las mismas ventajas que el acceso secuencial y el acceso aleatorio |

| **Desventajas** |
| --- |
| No se borran los registros, sino que se marcan para ser ignorados. Por lo que se malgasta espacio |
| Añadir registros o modificar las claves son operaciones que requieren recalcular los punteros por lo que llevan más tiempo que en los casos anteriores |

**d. Ficheros secuenciales indexados**

Se utilizan dos ficheros para los datos, uno posee los registros almacenados de forma secuencial, pero que permite su acceso aleatorio. El otro posee una tabla con punteros a la posición ordenada de los registros. Ese segundo fichero es el **índice,** una tabla con la ordenación deseada para los registros y la posición que ocupan en el archivo.

El archivo de índices posee unas cuantas entradas sólo en las que se indica la posición de ciertos valores claves en el archivo (cada 10, 15 ,20,... registros del archivo principal se añade una entrada en el de índices). El archivo principal tiene que estar siempre ordenado y así cuando se busca un registro, se busca su valor clave en la tabla de índices, la cual poseerá la posición del registro buscado. Desde esa posición se busca secuencialmente el registro hasta encontrarlo.

Existe un tercer archivo llamado de **desbordamiento** u **overflow** en el que se colocan los nuevos registros que se van añadiendo (para no tener que ordenar el archivo principal cada vez que se añade un nuevo registro) este archivo está desordenado. Se utiliza sólo si se busca un registro y no se encuentra en el archivo principal. En ese caso se recorre todo el archivo de overflow hasta encontrarlo.

Para no tener demasiados archivos en overflow (lo que restaría velocidad ya que no utilizaríamos el archivo de índices que es el que da velocidad), cada cierto tiempo se reorganiza el archivo principal, ordenando los datos en el orden correcto y recalculando el archivo de índices. Ejemplo:

![](https://jorgesanchez.net/manuales/gbd/sgbd-web-resources/image/15.png)

| **Ventajas** |
| --- |
| El archivo está siempre ordenado de forma secuencial en base a una clave. Por lo que la simple lectura secuencial del archivo obtiene un listado ordenado de los datos. |
| La búsqueda de datos es rapidísima |
| Permite la lectura secuencial (que además será en el orden de la clave) |
| Añadir un solo registro no conlleva un tiempo extra como en el caso anterior |
| **Desventajas** |
| Para un uso óptimo hay que reorganizar el archivo principal cada cierto tiempo y esta operación es muy costosa ya que hay que reescribir de nuevo y de forma ordenada todo el archivo con el área primeria, además de reorganizar el área de índices y eliminar el fichero de desbordamiento. Es tan costosa que se hace muy poco a menudo, pero en archivos de datos que se modifican muy a menudo, no reorganizar provocaría un área de desbordamiento enorme y perderíamos las ventajas de este modelo. |

**e. Ficheros indexado-encadenados**

Utiliza punteros e índices, es una variante encadenada del caso anterior. Hay un fichero de índices equivalente al comentado en el caso anterior y otro fichero de tipo encadenado con punteros a los siguientes registros. La diferencia está en que este segundo fichero que contiene el área primaria de los datos, no está ordenado secuencialmente, sino que el orden se realizaría recorriendo un puntero (como en el caso de los ficheros secuencialmente encadenados).

Cuando se añaden registros se añaden en un tercer fichero llamado de desbordamiento u **overflow**. En el área de desbordamiento los datos se almacenan secuencialmente, se accede a ellos si se busca un dato y no se encuentra el área primaria.

| **Ventajas** |
| --- |
| Posee las mismas ventajas que el modelo anterior además de que la reordenación es más rápida ya que sólo requiere modificar los punteros y el área de índices (no requiere reordenar todos los datos del área primaria). |
| **Desventajas** |
| Requieren compactar los datos a menudo para reorganizar índices y quitar el fichero de desbordamiento y es una operación lenta (aunque mucho menos lenta que en el caso anterior) |

![](https://jorgesanchez.net/manuales/gbd/sgbd-web-resources/image/archivos-secuencial-indexoencadenado.png)

Ejemplo fichero secuencial indexado y encadenado

### 4.3. Sistemas de gestión de información basados en ficheros

Este tipo de sistemas hace referencia a la forma que inicialmente se desarrolló en la informática para gestionar ficheros (y que aún se usa). En realidad, es una forma que traducía la manera clásica de gestionar sistemas de información (con sus archivadores, carpetas,…) al mundo electrónico.

![](https://jorgesanchez.net/manuales/gbd/sgbd-web-resources/image/1.png)

La idea es que los datos se almacenan en ficheros y se crean aplicaciones (cuyo código posee la empresa que crea dichas aplicaciones) para acceder a los ficheros. Cada aplicación organiza los datos en los ficheros como le parece mejor y si incorporamos aplicaciones nuevas, estas usarán sus propios ficheros.

Cada aplicación almacena y utiliza sus propios datos de forma un tanto caótica. La ventaja de este sistema (la única ventaja), es que los procesos son independientes por lo que la modificación de uno no afecta al resto. Pero tiene grandes inconvenientes:

- **Programación de aplicaciones compleja.** Ya que los programadores se deben de encargar de lo que tiene que hacer la aplicación y además de estructurar los datos en disco.
- **Datos redundantes.** Ya que se repiten continuamente. Podría, por ejemplo, ocurrir que una segunda aplicación utilice datos de personales, que resulta que ya estaban almacenados en los ficheros de una primera aplicación, pero como ambas son independientes, los datos se repetirán.
- **Datos inconsistentes.** En relación con el problema anterior, ya ****que un proceso cambia sus datos y no los del resto. Por lo que la misma información puede tener distintos valores según qué aplicación acceda a él.
- **Difícil acceso a los datos.** Cada vez que se requiera una consulta no prevista inicialmente, hay que modificar el código de las aplicaciones o incluso crear una nueva aplicación. Esto hace imposible pensar en nuevas consultas e instantáneamente obtener sus resultados; inviable para aplicaciones que requieren grandes capacidades de consultas y análisis de datos.
- **Coste de almacenamiento elevado.** Al almacenarse varias veces el mismo dato, se requiere más espacio en los discos. Además, las aplicaciones también ocupan mucho al tener que pensar en todas las posibles consultas sobre los datos que la organización precisa.
- **Dependencia de los datos a nivel físico.** Para poder saber cómo se almacenan los datos, es decir qué estructura se utiliza de los mismos, necesitamos ver el código de la aplicación; es decir el código y los datos no son independientes.
- **Dificultad para el acceso simultáneo a los datos.** El acceso simultáneo requiere que varios usuarios al puedan acceder a la misma información. Con este tipo de sistemas es extremadamente difícil conseguir esta capacidad.
- **Dificultad para administrar la seguridad del sistema.** Ya que cada aplicación se crea independientemente. Es, por tanto, muy difícil establecer criterios de seguridad uniformes. Es decir, los permisos que cada usuario tiene sobre los datos, se establecen de forma muy confusa (y nada uniforme ya que cada aplicación puede variar la seguridad).

### 4.4. El uso de los ficheros en las bases de datos

En las bases de datos actuales, sus datos se corresponden con cierto número de ficheros diferentes que mantiene el sistema operativo del sistema. Estos ficheros residen  permanentemente en los discos, y se mantienen con copias de seguridad. 

Cada archivo se divide en unidades de almacenamiento de longitud constante denominadas **bloques o páginas**, que son las unidades de asignación de almacenamiento y de transferencia de datos. 

Por ejemplo, el motor de bases de datos InnoDB, utiliza para guardar la información de las bases de datos que lo usan una serie de archivos con extensión `.ibd` , donde cada uno de ellos contiene principalmente:

1. **Datos de la tabla**: Las filas de la tabla, organizadas en **páginas** de 16 KB. Estas páginas contienen los valores de las columnas que has definido en el esquema de la tabla.
2. **Índices**: InnoDB utiliza un tipo de índice llamado **B-Tree** (un tipo de árbol balanceado), y los índices de la tabla también se almacenan en el archivo `.ibd`. Si has creado un índice en una columna o conjunto de columnas, esa información también se guarda en el `.ibd`.
3. **Metadatos internos de InnoDB**: Aunque la estructura de la tabla (el esquema) no está en el archivo `.ibd`, InnoDB incluye algunos **metadatos internos** necesarios para la administración de la tabla, como la cantidad de páginas, información sobre el espacio asignado, entre otros detalles técnicos necesarios para manejar los datos.

El acceso y direccionamiento de los contenidos en los archivos `.ibd` es una estructura bastante compleja que se realiza a través de una organización eficiente y jerárquica basada en **B-trees** (árboles B) y páginas de almacenamiento. 

## 5. Bases de datos

A finales de los setenta, la aparición de nuevas tecnologías de manejo de datos a través de los sistemas de bases de datos supuso un considerable cambio. Los sistemas basados en ficheros separados dieron paso a la utilización de sistemas gestores de bases de datos, que son sistemas software centralizados o distribuidos que ofrecen facilidades para la definición de bases de datos, selección de estructuras de datos y búsqueda de forma interactiva o mediante lenguajes de programación.

En la actualidad todos nosotros nos encontramos con actividades que requieren algún tipo de interacción con una base de datos (ingreso en un banco, reserva de una entrada para el teatro, solicitud de una suscripción a una revista, compra de productos, …). Estas interacciones son ejemplos de lo que se llama aplicaciones tradicionales de bases de datos (básicamente información numérica o de texto), aunque los avances tecnológicos han permitido que también existan: bases de datos multimedia, sistemas de información geográfica (GIS), almacenes de datos, sistemas de proceso analítico on-line, …

***Llegados a este punto, te preguntarás... ¿Qué es una base de datos?*** 

Esta pregunta no tiene una respuesta concreta y directa, puesto que existen multiples definiciones dadas por autores de libros y desarrolladores. Por esto, aportaremos una de ellas muy completa y extensa y, valoraremos los conceptos base que tiene y su recurrencia en los textos más importantes.

> **Base de datos:** Es una colección de datos relacionados lógicamente entre sí, con una definición y descripción comunes y que están estructurados de una determinada manera. Es un conjunto estructurado de datos que representa entidades y sus interrelaciones, almacenados con la mínima redundancia y posibilitando el acceso a ellos eficientemente por parte de varias aplicaciones y usuarios.
> 

La base de datos no sólo contiene los datos de la organización, también almacena una descripción de dichos datos. Esta descripción es lo que se denomina **metadatos,** y se almacenan en el denominado **diccionario de datos o catálogo** **y es lo que permite que exista **independencia de datos** lógica-física.

Una base de datos constará de los siguientes elementos:

- **Entidades:** objeto real o abstracto con características diferenciadoras de otros, del que se almacena información en la base de datos. Dicho de otra forma es algo acerca de lo cual se desea almacenar información. En una base de datos de una clínica veterinaria, posibles entidades podrían ser: ejemplar, doctor, consulta, etc.
- **Atributos:** son los datos que se almacenan de la entidad. Cualquier propiedad o característica de una entidad puede ser atributo. Continuando con nuestro ejemplo, podrían ser atributos: raza, color, nombre, número de identificación, etc.
- **Registros:** donde se almacena la información de cada entidad. Es un conjunto de atributos que contienen los datos que pertenecen a una misma repetición de entidad. En nuestro ejemplo, un registro podría ser: 2123056, Sultán, Podenco, Gris, 23/03/2009.
- **Campos:** donde se almacenan los atributos de cada registro. Teniendo en cuenta el ejemplo anterior, un campo podría ser el valor Podenco.

🏗️

**Situación de ejemplo**

Una entidad bancaria necesita una aplicación para poder almacenar información sobre los clientes, los empleados, los distintos productos financieros que se ofrecen, las sucursales pertenecientes a la entidad, las cuentas abiertas, etc. 

Con esta misma aplicación se deben poder realizar operaciones de consulta, actualización, etc., de los datos anteriormente mencionados.


Una solución propuesta por un técnico que desconozca los principios de las bases de datos podría ser la siguiente:

**Inicialmente**
A partir de las especificaciones del problema anterior, se identifican los datos a
almacenar:

- Los clientes
- Los empleados.
- Las cuentas.
- Los distintos productos financieros.

En un primer momento se crean distintos ficheros de consulta en los que se almacena información, como de son:

- Fichero de consulta clientes: para obtener datos como el nombre, los apellidos,
- Fichero de el teléfono, consulta etc. de los distintos productos financieros, donde se almacenan de datos como el
- Fichero  consulta de información interés, la comisión, de los empleados etc.donde se guard
- Fichero información con como la información el nombre, de los las apellidos, cuentas la de dirección, los clientes. la nómina, Se almacenan etc.
datos como la fecha de apertura, el saldo actual, los movimientos
realizados, etc

A partir de los ficheros anteriores se crean cuatro aplicaciones distintas para
gestionar la  información:

- Creación de las nuevas cuentas.
- Actualización del estado de las cuentas.
- Gestión de clientes.
- Creación de informes.

***Ampliaciones posteriores***

Un año después de la implantación de la aplicación, aparecen las siguientes
modificaciones respecto a las  especificaciones que se proporcionaron inicialmente:

- Ha aumentado el número  de oficinas.
- Se han creado nuevas aplicaciones financieras.
- Ha aumentado el número de clientes.


🔥

**INCONVENIENTES.**



Tras un cierto tiempo de prueba de la aplicación, se han detectado los siguientes
problemas:

1. Se tienen datos repetidos y no son iguales; problema de redundancia e
inconsistencia.
2. Acceso complicado a datos internos (necesidades no previstas).
3. Hay archivos con distintos formatos; problema del aislamiento. Es difícil
agrupar datos de archivos diferentes y el acceso a ellos también es más
complejo.
4. Integridad de nuevas ligaduras (las normas y los permisos pueden variar).
5. Si el sistema se cae, existen errores en las cuentas; problema de
atomicidad. Es difícil tener transacciones con sistemas de archivos.
6. El cajero conoce tu nómina; problema de seguridad. No existen vistas ni
restricción de acceso a los datos.
7. El misterio de los Pérez. A partir de una sola cuenta con 100 €, en un
momento dado, los tres sacan dinero al mismo tiempo –cada uno 10 €–,
pero en la cuenta quedan 90 €. El problema está en que los tres acceden a
la misma información inicial (no hay bloqueos).


**SOLUCIÓN.**
En los sistemas de archivos aparecen los problemas anteriormente expuestos. Al
crecer, se hacen más complejos debido a que son rígidos. La solución a todos estos
problemas es tener un sistema gestor de bases de datos (S.G.B.D.).


### 5.1. **Sistemas de Bases de Datos**

En este tipo de sistemas, los datos se centralizan en una **base de datos** común a todas las aplicaciones. Un software llamado **Sistema Gestor de Bases de Datos (SGBD)** es el que realmente accede a los datos y se encarga de gestionarlos. Las aplicaciones que creen los programadores, no acceden directamente a los datos, de modo que la base de datos es común para todas las aplicaciones.

De esta forma, hay, al menos, dos capas a la hora de acceder a los datos. Las aplicaciones se abstraen sobre la forma de acceder a los datos, dejando ese problema al SGBD. Así se pueden concentrar exclusivamente en la tarea de conseguir una interfaz de acceso a los datos para los usuarios.

![sistemas-bd.png]()

Cuando una aplicación modifica un dato, la modificación será visible inmediatamente para el resto de aplicaciones; ya que todas utilizarán la misma base de datos.

| **Ventajas** |
| --- |
| **Independencia de los datos y los programas.** Esto permite modificar los datos sin modificar el código de las aplicaciones y viceversa. |
| **Menor redundancia**. Este modelo no requiere que los datos se repitan para cada aplicación que los requiera., en su lugar se diseñan los datos de forma independiente a las aplicaciones. Los programadores de aplicaciones deberán conocer la estructura creada para los datos y la forma en la que deben acceder a ellos. |
| **Integridad de los datos**. Al estar centralizados, es más difícil que haya datos incoherentes. Es decir, que una aplicación muestre información distinta al resto de aplicaciones, ya que los datos son los mismos para todas. |
| **Mayor seguridad en los datos.** El SGBD es el encargado de la seguridad y se puede centrar en ella de forma independiente a las aplicaciones. Como las aplicaciones deben atravesar la capa del SGBD para llegar a los datos, no se podrán saltar la seguridad. |
| **Visiones distintas según el usuario.** Nuevamente, centralizar los datos facilita crear políticas que permitan que los usuarios vean la información de la base de datos de forma distinta. |
| **Datos más documentados.** Las bases de datos tienen mucho mejor gestionados los **metadatos,** que permiten describir la información de la base de datos y que pueden ser consultados por las aplicaciones. |
| **Acceso a los datos más eficiente.** Esta forma de organizar los datos produce un resultado más óptimo en rendimiento ya que los sistemas gestores centralizan el acceso pudiendo ejecutar políticas diferentes en función de la demanda. |
| **Menor espacio de almacenamiento.** Puesto que hay muy poca redundancia. |
| **Acceso simultáneo a los datos.** Nuevamente el SGBD tiene más capacidad de conseguir esto. Cuando hay varias aplicaciones que intentan acceder a los datos en los sistemas orientados a los ficheros, compiten por los datos y es fácil el bloqueo mutuo. En el caso de los sistemas orientados a bases de datos, toda petición pasa la capa del SGBD y esto permite evitar los bloqueos. |
| **Desventajas** |
| **Instalación costosa.** El control y administración de bases de datos requiere de un software y hardware poderoso. |
| **Requiere personal cualificado.** Debido a la dificultad de manejo de este tipo de sistemas. |
| **Implantación larga y difícil.** En relación a los puntos anteriores. La adaptación del personal y del equipamiento es mucho más complicada y lleva bastante tiempo. |
| **Ausencia de estándares totales.** Lo cual significa una excesiva dependencia hacia los sistemas comerciales del mercado. Aunque, hoy en día, hay un funcionamiento base y un lenguaje de gestión (**SQL**) que desde hace tiempo se considera estándar (al menos en las bases de datos relacionales). |

## 6. Sistemas Gestores de Bases de Datos

 Para poder tratar la información contenida en las bases de datos se utilizan los sistemas gestores de bases de datos o SGBD, también llamados DBMS (DataBase Management System), que ofrecen un conjunto de programas que permiten acceder y gestionar dichos datos.

El objetivo fundamental de los SGBD es proporcionar eficiencia y seguridad a la hora de recuperar o insertar información en las bases de datos. Estos sistemas están diseñados para la manipulación de grandes bloques de información.

> **Sistema Gestor de Base de Datos:** Conjunto coordinado de programas, procedimientos, lenguajes, etc., que suministra, tanto a los usuarios no informáticos, como a los analistas, programadores, o al administrador, los medios necesarios para describir y manipular los datos contenidos en la base de datos, manteniendo su integridad, confidencialidad y seguridad.
> 

### 6.1. Funciones.

Un SGBD desarrolla tres funciones fundamentales: descripción, manipulación y control o utilización de los datos. A continuación se describen estas tres funciones.

**a. Función de descripción o definición**

Permite al diseñador de la base de datos crear las estructuras apropiadas para integrar adecuadamente los datos. Se dice que esta función es la que permite definir las tres estructuras de la base de datos (relacionadas con los tres niveles de abstracción de las mismas).

- **Estructura interna**
- **Estructura conceptual**
- **Estructura externa**

Más adelante se explican estas tres estructuras, relacionadas con las tres formas (o niveles) de ver la base de datos.

Realmente la función de definición lo que hace es gestionar los **metadatos**. Los metadatos son la estructura de la dispone el sistema de base de datos para documentar cada dato. Los metadatos también son datos que se almacenan en la propia base de datos; pero su finalidad es describir los datos.

Un metadato nos permite para saber a qué información real se refiere cada dato. Por ejemplo: *Sánchez*, *Rodríguez* y *Crespo* son datos. Pero *Primer Apellido* es un metadato que, si está correctamente creado, nos permite determinar que *Sánchez*, *Rodríguez* y *Crespo* son primeros apellidos.

Dicho de otra forma, sin los metadatos, no podríamos manejar los datos como información relevante. Por ello son fundamentales. Son, de hecho, la base de la creación de las bases de datos.

Los metadatos pueden indicar cuestiones complejas. Por ejemplo, que de los *Alumnos* almacenamos su *dni* el cual lo forman 9 caracteres. Incluso podremos indicar que en el *dni* los 8 primeros son números y el noveno un carácter en mayúsculas que además cumple una regla concreta y sirve para identificar al alumno.

Por lo tanto, en realidad, **la función de definición sirve para crear, eliminar o modificar metadatos**.

Resumiendo: con la función de definición podremos:

- Especificar el significado de los datos
- Organizar la información en estructuras más complejas
- Relacionar los datos de forma precisa
- Especificar reglas especiales que deben cumplir los datos
- Crear todos los elementos estructurales de la base de datos (incluidos los usuarios)

Un lenguaje conocido como **lenguaje de descripción de datos** o **DDL**, es el que permite realizar la función de definición en las bases de datos.

**b. Función de manipulación**

Permite cambiar y consultar los **datos** de la base de datos. Se realiza mediante un **lenguaje de modificación de datos** o **DML.** Mediante este lenguaje se puede:

- Añadir ****datos
- Eliminar ****datos
- Modificar ****datos
- Consultar datos

Actualmente se suele diferenciar la **función de consulta de datos**, diferenciándola del resto de operaciones de manipulación de datos. Se habla de que la función de consulta se realiza con un **lenguaje de consulta de datos** o **DQL** (*Data Query Language*)**.**

**c. Función de control**

Mediante esta función los administradores poseen mecanismos para proteger los datos. De manera que se permite a cada usuario ver ciertos datos y otros no, o bien usar ciertos recursos concretos de la base de datos y prohibir otros. Es decir, es la función encargada de establecer los permisos de acceso a los elementos que forman parte de la base de datos.

El lenguaje que implementa esta función es el **lenguaje de control de datos** o **DCL.**

### 6.2. Componentes de un SGBD

Una vez descritas las funciones que un SGBD debe llevar a cabo, imaginarás que un SGBD es un paquete de software complejo que ha de proporcionar servicios relacionados con el almacenamiento y la explotación de los datos de forma eficiente. Para ello, cuenta con una serie de componentes que se detallan a continuación:

1. **Lenguajes de la base de datos.** Cualquier sistema gestor de base de datos ofrece la posibilidad de utilizar lenguajes e interfaces adecuadas para sus diferentes tipos de usuarios. A través de los lenguajes se pueden especificar los datos que componen la BD, su estructura, relaciones, reglas de integridad, control de acceso, características físicas y vistas externas de los usuarios. Los lenguajes del SGBD son: Lenguaje de Definición de los Datos (**DDL**), Lenguaje de Manejo de Datos (**DML**) y Lenguaje de Control de Datos (**DCL**).
2. **El diccionario de datos.** Descripción de los datos almacenados. Se trata de información útil para los programadores de aplicaciones. Es el lugar donde se deposita la información sobre la totalidad de los datos que forman la base de datos. Contiene las características lógicas de las estructuras que almacenan los datos, su nombre, descripción, contenido y organización. En una base de datos relacional, el diccionario de datos aportará información sobre:
    - Estructura lógica y física de la BD.
    - Definición de tablas, vistas, indices, disparadores, procedimientos, funciones, etc.
    - Cantidad de espacio asignado y utilizado por los elementos de la BD.
    - Descripción de las restricciones de integridad.
    - Información sobre los permisos asociados a cada perfil de usuario.
    - Auditoría de acceso a los datos, utilización, etc.
3. **El gestor de la base de datos.** Es la parte de software encargada de garantizar el correcto, seguro, íntegro y eficiente acceso y almacenamiento de los datos. Este componente es el encargado de proporcionar una interfaz entre los datos almacenados y los programas de aplicación que los manejan. Es un intermediario entre el usuario y los datos. Es el encargado de garantizar la privacidad, seguridad e integridad de los datos, controlando los accesos concurrentes e interactuando con el sistema operativo.
4. **Usuarios de la base de datos.** En los SGBD existen diferentes perfiles de usuario, cada uno de ellos con una serie de permisos sobre los objetos de la BD. Generalmente existirán:
    - El **administrador de la base de datos** o Database Administrator ( ), que será la persona o conjunto de ellas encargadas de la función de administración de la base de datos. Tiene el control centralizado de la base de datos y es el responsable de su buen funcionamiento. Es el encargado de autorizar el acceso a la base de datos, de coordinar y vigilar su utilización y de adquirir los recursos software y hardware que sean necesarios.
        
        DBA
        
    - Los **usuarios de la base de datos**, que serán diferentes usuarios de la BD con diferentes necesidades sobre los datos, así como diferentes accesos y privilegios. Podemos establecer la siguiente clasificación:
        - Diseñadores.
        - Operadores y personal de mantenimiento.
        - Analistas y programadores de aplicaciones.
        - Usuarios finales: ocasionales, simples, avanzados y autónomos.
5. **Herramientas de la base de datos.** Son un conjunto de aplicaciones que permiten a los administradores la gestión de la base de datos, de los usuarios y permisos, generadores de formularios, informes, interfaces gráficas, generadores de aplicaciones, etc.

![image.png]()

### 6.3. Arquitectura

En cualquier software siempre hay dos puntos de vista:

- **Nivel externo**. Esta es la visión del software que tienen los usuarios
- **Nivel interno**. Visión de los creadores del software, que determina su forma de funcionar.

Esta separación distingue al usuario o usuaria, del programador o programadora que ha creado la aplicación, y es crucial que sea así. La persona que utiliza el software evita tener que Del mismo modo una casa se la puede observar desde el punto de vista del inquilino de la misma o bien de las personas que la construyeron. Los primeros ven la función real de la misma y los constructores nos podrán hablar de los materiales empleados por ejemplo.

En el caso de las bases de datos hay más niveles, más formas de observar la base de datos y estos niveles son manejados por los distintos usuarios de la base de datos. A eso se le llama los niveles de abstracción porque nos permite efectivamente abstraernos para observar la base de datos en base a diferentes intereses. Los usuarios podrán entender la base de datos sin conocer los entresijos técnicos y los administradores podrán trabajar con base de datos sin conocer la forma en la que los usuarios realmente añaden los datos.

Los niveles habituales son:

- **Nivel físico**. Nos permite saber la forma en la que está almacenada la base de datos. Por ejemplo en qué discos duros, qué archivos utiliza, de qué tipo son los archivos, bajo qué sistema operativo,… Este nivel es el que está más cercano a la visión de la base de datos que posee la computadora, por lo que es absolutamente dependiente del hardware y el software (especialmente del Sistema Operativo).
- **Nivel interno**. Un poco más cercano a la visión que tenemos las personas. Permite observar la base de datos como un conjunto de estructuras que relacionan la información humana con la información digital. A este nivel no se depende del hardware concreto que tengamos; es decir, no se habla de discos, servidores, archivos,… sino de las estructuras que disponemos en nuestro SGBD en particular para organizar los datos.
- **Nivel conceptual**. Es el nivel de mayor abstracción y el más importante. Se trata de una visión organizativa de los datos independiente tanto del hardware como del software que tengamos. Es el plano o modelo general de la base de datos y a este nivel es al que trabajan las o los analistas y diseñadores cuando crean el primer esquema de la base de datos. En ningún momento queda influido por el SGBD en particular que usemos.
- **Nivel externo**. Se trata de la visión de los datos que poseen los usuarios y usuarias ****finales de la base de datos**.** Esa visión es la que obtienen a través de las aplicaciones. Las aplicaciones creadas por los desarrolladores abstraen la realidad conceptual de modo que el usuario no conoce las relaciones entre los datos, como tampoco conoce dónde realmente se están almacenando los datos. Es la forma en la que cualquier persona desea manejar una base de datos a través de formularios, informes, listas,…

La idea de estos niveles procede de la normalización hecha en el modelo **ANSI/X3/SPARC** (Véase [[a2] estándares y modelo ANSI en la página 46](https://jorgesanchez.net/manuales/gbd/sgbd.html#_idTextAnchor029)) y sigue estando muy presente en la gestión actual de las bases de datos.

Este modelo dictó que podemos pasar de unos modelos a otros de manera casi automática utilizando un software adecuado. El modelo ANSI llama a ese software **procesador de modelos** y hoy en día es lo que se conoce como **herramientas CASE (Computer Aided for Software Engineering,** *Asistente Computerizado para Ingeniería del Software*). Para cada nivel se realizan esquemas relacionados con ellos. Así hay **esquemas externos** (varios), **esquema conceptual**, **esquema interno** y **esquema físico** que forman todos los aspectos de la base de datos.

![niveles.png]()

En la [Ilustración 3](https://jorgesanchez.net/manuales/gbd/sgbd.html) se observa la distancia que poseen los usuarios de la base de datos respecto a la realidad física de la base de datos (representada con el cilindro). La física son los datos en crudo, es decir en formato binario dentro del disco o discos que los contienen. El esquema físico es el que se realiza pensando más en esa realidad y los esquemas externos los que se crean pensando en la visión de los usuarios.

Las dos columnas que aparecen en la imagen reflejan dos fronteras a tener en cuenta:

- **Independencia Lógica**. Los esquemas de los niveles conceptual y externo son independientes del software concreto de base de datos que usemos; no dependen en absoluto de él. Por ello esos esquemas nos valdrían para cualquier SGBD que utilicemos.
- **Independencia Física**. La da la barrera entre el esquema físico y el interno e indica que el esquema interno es independiente del hardware concreto que usemos. El esquema físico se diseña en base a un hardware concreto, pero él interno no. Eso permite concentrarse en detalles más conceptuales.

### 6.5. T**ipos de SGBD**

Como se ha visto en los apartados anteriores, resulta que cada SGBD puede utilizar un modelo diferente para los datos. Por lo que hay modelos conceptuales diferentes según que SGBD utilicemos. Esto da lugar a un diagrama de trabajo para los profesionales de la base de datos que permite saber qué esquemas hay que realizar (y en qué orden) para crear una base de datos.

El punto de partida es el uso en el mundo real que tendrá la base de datos. Ese punto es en el que están los usuarios y es crucial tenerle muy claro. El punto final es el almacenamiento físico de la base de datos.

![esquemas-niveles.png]()

En este esquema aparece el llamado **Esquema lógico**, que permite pasar de forma más gradual del esquema conceptual al esquema interno.

No obstante existen modelos lógicos comunes, ya que hay SGBD de diferentes tipos. En la realidad el modelo conceptual clásico se modifica para que existan dos modelos internos: el modelo lógico (referido a cualquier SGBD de ese tipo) y el modelo conceptual propiamente interno (aplicable sólo a un SGBD en particular). De hecho, en la práctica, al definir las bases de datos desde el mundo real hasta llegar a los datos físicos se pasa por todos los esquemas señalados en puntos anteriores.

Por lo tanto la diferencia entre los distintos SGBD está en que proporcionan diferentes modelos lógicos.

**Diferencias entre el modelo lógico y el conceptual**

- El modelo conceptual es independiente del DBMS que se vaya a utilizar. El lógico depende de un **tipo** de SGBD en particular
- El modelo lógico está más cerca del modelo físico, el que utiliza internamente el ordenador
- El modelo conceptual es el más cercano al usuario, el lógico es el encargado de establecer el paso entre el modelo conceptual y el modelo físico del sistema.

Algunos ejemplos de modelos conceptuales son:

- **Modelo Entidad Relación**
- **Modelo RM/T**
- **Modelo UML**

Ejemplos de modelos lógicos son:

- **Modelo relacional**
- **Modelo Codasyl**
- **Modelo Jerárquico**

A continuación se comentarán los modelos lógicos más importantes.

**Modelo jerárquico**

Era utilizado por los primeros SGBD, desde que IBM lo definió para su IMS (*Information Management System,* Sistema Administrador de Información) en 1970. Se le llama también modelo en árbol debido a que utiliza una estructura en árbol para organizar los datos.

La información se organiza con un jerarquía en la que la relación entre las entidades de este modelo siempre es del tipo **padre / hijo**. De esta forma hay una serie de nodos que contendrán atributos y que se relacionarán con nodos hijos de forma que puede haber más de un hijo para el mismo padre (pero un hijo sólo tiene un padre).

![jerarquico.png]()

Los datos de este modelo se almacenan en estructuras lógicas llamadas **segmentos**. Los segmentos se relacionan entre sí utilizando **arcos.**

La forma visual de este modelo es de árbol invertido, en la parte superior están los padres y en la inferior los hijos.

Este esquema está en absoluto desuso ya que no es válido para modelar la mayoría de problemas de bases de datos. Su virtud era la facilidad de manejo ya que sólo existe un tipo de relación (padre/hijo) entre los datos; su principal desventaja es que no basta para representar la mayoría de relaciones. Además no mantenía la independencia con la física de la base de datos.

**Modelo en red (Codasyl)**

Es un modelo que ha tenido una gran aceptación (aunque apenas se utiliza actualmente). En especial se hizo popular la forma definida por el estándar Codasyl a principios de los 70 que se convirtió en el modelo en red más utilizado.

![](https://jorgesanchez.net/manuales/gbd/sgbd-web-resources/image/12.png)

El modelo en red organiza la información en **registros** (también llamados **nodos**) y **enlaces**. En los registros se almacenan los datos, mientras que los enlaces permiten relacionar estos datos. Las bases de datos en red son parecidas a las jerárquicas sólo que en ellas puede haber más de un padre.

En este modelo se pueden representar perfectamente cualquier tipo de relación entre los datos (aunque el Codasyl restringía un poco las relaciones posibles), pero hace muy complicado su manejo.

Poseía un lenguaje poderoso de trabajo con la base de datos. El problema era la complejidad para trabajar con este modelo tanto para manipular los datos como programar aplicaciones de acceso a la base de datos. Tampoco mantenía una buena independencia con la física de la base de datos.

**Modelo relacional**

Es el modelo más popular. Los datos se organizan en tablas y estas en columnas y filas de datos. Las tablas se relacionan entre sí para ligar todos los datos.

Se basa en la teoría de conjuntos y consigue una gran separación entre lo conceptual y lo físico, consiguiendo su total independencia. Tiene un lenguaje considerado estándar, el SQL y una enorme red de usuarios y documentación que facilita su aprendizaje. Además dota de una gran facilidad para establecer reglas complejas a los datos.

El problema es que la simplicidad de manejo y la independencia que consigue se logra a base de un software muy complejo que requiere también un hardware poderoso.

**Modelo de bases de datos orientadas a objetos**

Desde la aparición de la programación orientada a objetos (**POO** u **OOP**) se empezó a pensar en bases de datos adaptadas a estos lenguajes. La programación orientada a objetos permite cohesionar datos y procedimientos, haciendo que se diseñen estructuras que poseen datos (**atributos**) en las que se definen los procedimientos (**operaciones**) que pueden realizar con los datos. En las bases orientadas a objetos se utiliza esta misma idea.

A través de este concepto se intenta que estas bases de datos consigan arreglar las limitaciones de las relacionales. Por ejemplo el problema de la herencia (el hecho de que no se puedan realizar relaciones de herencia entre las tablas), tipos definidos por el usuario, disparadores (triggers) almacenables en la base de datos, soporte multimedia...

Se supone que son las bases de datos de tercera generación (la primera fue las bases de datos en red y la segunda las relacionales), lo que significa que el futuro parece estar a favor de estas bases de datos. Pero siguen sin reemplazar a las relacionales, aunque son el tipo de base de datos que más está creciendo en los últimos años.

Su modelo conceptual se suele diseñar usando la notación **UML** y el lógico usando **ODMG** (*Object Data Management Group,* grupo de administración de objetos de datos), organismo que intenta crear estándares para este modelo.

Sus ventajas están en el hecho de usar la misma notación que la de los programas (lo que facilita la tarea de su aprendizaje a los analistas y desarrolladores) y que el significado de los datos es más completo. Lo malo es que no posee un lenguaje tan poderoso como el modelo relacional para manipular datos y metadatos, que tiene más dificultades para establecer reglas a los datos y que al final es más complejo para manejar los datos.

**Bases de datos objeto-relacionales**

Tratan de ser un híbrido entre el modelo relacional y el orientado a objetos. El problema de las bases de datos orientadas a objetos es que requieren reinvertir capital y esfuerzos de nuevo para convertir las bases de datos relacionales en bases de datos orientadas a objetos. En las bases de datos objeto relacionales se intenta conseguir una compatibilidad relacional dando la posibilidad de integrar mejoras de la orientación a objetos.

Estas bases de datos se basan en el estándar **ISO** **SQL 2000** y los siguientes. En ese estándar se añade a las bases relacionales la posibilidad de almacenar procedimientos de usuario, triggers, tipos definidos por el usuario, consultas recursivas, bases de datos OLAP, tipos LOB,...

Las últimas versiones de la mayoría de las clásicas grandes bases de datos relacionales (**Oracle**, **SQL Server**, **DB2**, ...) son objeto relacionales.

**Bases de datos NoSQL**

En los últimos años ha aparecido todo un género de bases de datos (de varios tipos) que intentan paliar deficiencias detectadas en el modelo relacional.

El dominio de este modelo parecía demostrar, durante décadas, que era el tipo ideal de base de datos. El cambio de perspectiva se ha producido por la altísima demanda de servicios que requiere Internet. En especial si lo que se requiere es escribir o modificar datos, ya que actualmente todos los usuarios de Internet crean muchísimos datos cada día que requieren ser almacenados inmediatamente (el caso más claro es el de las redes sociales).

Con este panorama han aparecido nuevos tipos de bases de datos y se han modificado y actualizado tipos antiguos que ahora parecen útiles. Lo que aportan la mayoría de estos tipos de bases de datos, es el uso de otro tipo de esquemas conceptuales e internos más apropiados para este tipo de demandas de usuario.

En resumen las bases de datos NoSQL renuncian al modelo relacional para paliar las carencias del modelo relacional en estos aspectos:

- Aceptar un enorme cantidad peticiones de consulta y especialmente de modificación de datos por minuto
- Gestionar datos muy heterogéneos (irregulares, con tipos de datos cambiantes)
- Gestionar datos que se relacionan de manera muy compleja
- Usar otros lenguajes (diferentes a SQL), más aptos para otras tareas

Esto no significa que cada base de datos NoSQL sea capaz de mejorar en todos los aspectos anteriores, cada tipo de base de datos NoSQL está pensado para algunos de los puntos anteriores.

# 7. Bibliografía

DAVENPORT, T.; PRUSAK, L. (1998). Working knowledge: How organizations manage
what they know. Boston: Harvard Business School Press.

- (2001). Conocimiento en Acción. Cómo las organizaciones manejan lo que saben.
Buenos Aires: Pearson Education.

DE MIGUEL ANASAGASTI, P., & PÉREZ COSTOYA, F. (2016). *Sistemas operativos*. Departamento de Arquitectura y Tecnología de Sistemas Informáticos, Escuela Técnica Superior de Informática, Universidad Politécnica de Madrid.

# 8. Créditos y reconocimientos

- Apuntes de Jorge Sánchez [https://jorgesanchez.net/](https://jorgesanchez.net/)

[Ejercicios](https://www.notion.so/Ejercicios-1229b53402a4802b9812ca50b75243ed?pvs=21)

[Varios](https://www.notion.so/Varios-1229b53402a4801db705e85418cf38f3?pvs=21)
