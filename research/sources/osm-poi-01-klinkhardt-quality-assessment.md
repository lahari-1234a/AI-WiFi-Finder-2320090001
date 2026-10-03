Source: https://journals.sagepub.com/doi/full/10.1177/03611981231169280
Title: Quality Assessment of OpenStreetMap’s Points of Interest with Large-Scale Real Data - Christian Klinkhardt, Fabian Kühnel, Michael Heilig, Sven Lautenbach, Tim Wörle, Peter Vortisch, Tobias Kuhnimhof, 2023 
Fetched: 2026-10-03T05:01:41.309Z

[Skip to main content](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#skipNavigationTo)

|     |
| --- |
| **Scheduled maintenance on Monday, 5th October. [See what this means for you](https://journals.sagepub.com/page/help/what-happens-during-upgrade)** |

Intended for healthcare professionals

![](https://journals.sagepub.com/pb-assets/Headers/spTRR_header-1662986245830.jpg)

[Transportation Research Record: Journal of the Transportation Research Board](https://journals.sagepub.com/home/TRR)

[![National Academy of Sciences: Transportation Research Board](https://journals.sagepub.com/pb-assets/societylogos/trr_society1_logo-1662986136037.gif)](http://www.trb.org/Main/Home.aspx "")

[Impact Factor: **2.2**/ 5-Year Impact Factor: **2.3**](https://journals.sagepub.com/metrics/trr)

[Journal menu](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#)

[Journal Homepage](https://journals.sagepub.com/home/TRR)

Contents

- [Abstract](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#abstract)
- [Literature](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#sec-1)
- [Data](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#sec-2)
- [Analysis](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#sec-3)
- [Conclusion](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#sec-4)
- [Declaration of Conflicting Interests](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#conflict)
- [Funding](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#funding)
- [ORCID iDs](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#orcid)
- [References](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibliography)

[PDF/EPUB](https://journals.sagepub.com/doi/reader/10.1177/03611981231169280)

[More](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#core-collateral-more)

## Abstract

OpenStreetMap (OSM) data are geographical data that are easy and open to access and therefore used for a large set of applications including travel demand modeling. However, often there is a limited awareness about the shortcomings of volunteered geographic information data, such as OSM. One important issue for the application in travel demand modeling is the completeness of OSM elements, particularly points of interest (POI), since it directly influences the predictions of trip distributions. This might cause unreliable model sensitivities and end up in wrong predictions leading to expensive misinterpretations of the effects of policy measures. Because of a lack of large-scale real-world data, a detailed assessment of the quality of POI from OSM has not been done yet. Therefore, in this work, we assess the quality of POI from OSM for use within travel demand models using surveyed real-world data from 49 areas in Germany. We perform a descriptive and a model-based analysis using spatial, demographic, and intrinsic indicators for two common trip purpose categories used in travel demand modeling. We show that the completeness of POI data in OSM depends on the category of POI. We further show that intrinsic indicators and indicators calculated based on data from other sources (e.g., land use or census data) are able to detect quality deficiencies of OSM data.

Travel demand models are essential tools to estimate the impacts of transport policy and infrastructure measures, since they are capable of simulating and assessing different scenarios. The results form the basis of extensive and usually costly decisions. The models must therefore be as accurate as possible in their forecasts. Therefore, they aim to simulate the travel behavior of people on the basis of several decisions: which activities are conducted, where the activities take place, and which means of transport and which routes are used on the trips. Choosing the destination of a trip is based on locations, where activities can be carried out: for example, supermarkets for grocery shopping, sports facilities for recreation, or train stations to pick up or drop off friends or relatives, to name a few.

Consequently, the structure of an area with different offerings contributes significantly to its attractiveness for a certain activity. Attractiveness is thus a structural parameter that forms the basis for modeling destination choice. This requires the collection of structural data, for example, retail facilities or cultural offerings. The data should be as detailed and up-to-date as possible. This type of data can be laboriously collected manually with the inclusion of existing surveys and official data. In addition, there are offers from commercial providers, which sell the data for accessibility analyses and market analyses, among other things. Accordingly, these offers cost money and the approach of the providers is not comprehensible.

At this point, open data offer several advantages. The data are provided in an open format that is usually well documented. This significantly reduces the effort for using the data from a technical perspective. If the data are available in a uniform format for different areas, any methods, frameworks, and procedures based on it can be easily transferred to other regions. Also, because the data are in a defined format, it can be processed automatically in all available areas. Furthermore, if the data are updated regularly, all models built on it can also be updated on a regular base. The public availability of the data also promotes transparency of the respective models. Everyone who knows the process can reproduce the results. Thus, there is no longer a “black box” as with most commercial data. One of the largest providers of geographical open data is OpenStreetMap (OSM), which belongs to the field of volunteered geographic information (VGI). VGI characterizes information collected by so-called “mappers” in their spare time and made available on platforms such as OSM.

Haklay points out that “volunteers…collect information of their own accord without top-down coordination that would ensure systematic coverage” ( _[1](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr1-03611981231169280)_). This raises the concern of points of interest (POI) not being equally complete in all areas, which would distort the destination choice. To use OSM data for travel demand modeling without hesitation, it is crucial to ensure comparably good-quality POI data for the designated areas.

Therefore, investigating whether POI related to certain activity types are mapped completely in the region of interest is of high relevance. Because of a lack of open or surveyed large-scale data from real-world POI, such an investigation is usually not feasible. However, there exist several approaches using intrinsic indicators, such as the historic saturation rate or the number of volunteers in a certain area. However, these intrinsic methods have also not been verified with real-world data so far for the same reasons. Therefore, in our work, we use surveyed data from real-world POI from 49 survey sites to: 1) perform an analysis of the completeness of POI data from OSM, 2) assess influences from spatial structures, and 3) evaluate the explanatory power of intrinsic indicators.

The paper is structured as follows. First of all, literature is reviewed for the present state of knowledge on POI data quality and requirements. The next section describes the data sources and the data processing as well as the calculation of the various indicators. This is followed by a section providing insights into the analysis methods and the results of our analysis. Finally, a summary of the work and an outlook is provided.

## Literature

There are related national guidelines for the setup of travel demand models, which specify the requirements for different model aspects and input data. However, the use of structural data such as POI for different purposes is only of minor importance. Most of these guidelines—for example, the Swiss and British guidelines for data sources of travel demand models—only provide ideas for the use of POI data, and merely focus on the network data and related data of transport infrastructure such as time tables or stations ( _[2](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr2-03611981231169280)_, _[3](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr3-03611981231169280)_).

Nevertheless the use, quality, and application of crowd-sourced POI data has been subject to a wide range of research. Depending on the purpose of an analysis, different dimensions of data quality are of concern ( _[4](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr4-03611981231169280)_). For the purpose of travel demand estimation, object completeness and correct classification of POI are of high importance while for navigation, correctness of topological relations plays as important role as well. Correctness of the geometrical representation (single point or floor area of buildings) of the object is of lower importance. Yeow et al. compared various measures and validation methods to assess POI data quality ( _[5](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr5-03611981231169280)_). They considered both intrinsic and extrinsic approaches and found positional accuracy to be the most-studied element of data quality. Thematic accuracy and completeness were less represented in the studies. As a measure of completeness, the share of observed POI compared with a reference database was the most popular one, whereas community activity can serve as an indicator as well. The completeness of POI data in the application area in Singapore was found to be weak suggesting “errors of commission and omission.” Hochmair et al. compares different sources of publicly available POI data of mapping and social media platforms without a comparison of ground truth data ( _[6](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr6-03611981231169280)_). The data of mapping platforms had a higher spatial accuracy than social media data. The authors proposed a closer look at POI contribution patterns and a further investigation of selected test areas. Touya et al. conducted a completeness and accuracy analysis based on a reference dataset and Flickr photographs, and highlighted the use of multiple indicators as each of them revealed strengths and weaknesses when applied to different POI categories ( _[7](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr7-03611981231169280)_).

Going beyond only looking at measures, influences such as spatial structure, demography, and community indicators on the data quality are of interest. Yang et al. analyzed positional accuracy and completeness of Chinese POI data and explored influencing factors by applying a geographically weighted regression ( _[8](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr8-03611981231169280)_). The distribution of the contributors was found to be most important, while population density and per capita GDP had little influence. Still, with respect to OSM data quality, many authors reported a tendency for higher data quality in more densely populated areas ( _[1](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr1-03611981231169280)_, _[8](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr8-03611981231169280)_, _[9](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr9-03611981231169280)_).

In general, one can find many approaches and research on how crowd-sourced POI data already in the database can be improved. Goodchild and Li describe approaches from involving local collaborations to geographical consistency checks integrated in the database to rely on correction through the crowd ( _[10](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr10-03611981231169280)_). Tré et al. provides a cleansing technique for checking coreferent POI ( _[11](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr11-03611981231169280)_).

Quality assessment of POI is already a popular subject in the field of geo-information. The approaches still barely focus on the completeness of POI and, if so, they focus on intrinsic assessments or the comparison of different sources of VGI. Completeness comparison with “ground truth data” is found only in a few cases and in geographically and POI type limited applications. Furthermore, data quality is highly dependent on the local community, leading to different results in quality assessment. A large-scale quality assessment with real-world data can therefore enable further insights into the usability of VGI data.

To date, no analysis on the completeness of POI in OSM based on a large-scale reference data set has been conducted. Therefore, based on surveyed data collected on various sites all over Germany, we aim to analyze factors which determine the completeness of OSM POI. To build the bridge to existing research using intrinsic assessments, we also include intrinsic features in our analysis to assess based on the extrinsic reference data if they are able to account for completeness as well.

## Data

The aim of this research is to validate the completeness of POI data mapped in OSM. In this paper, we focus on POI for the two trip purposes _shopping_ and _private business_ since we focused on one activity with highly visible POI and one activity with rather hidden POI. For this purpose, relevant POI were extracted from OSM for the two activities using a tag filter defined in previous work ( _[12](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr12-03611981231169280)_). The extracted POI were then compared with real POI data from 49 areas, which were surveyed manually on site. In our analysis, we first compared the two data sets showing the absolute and relative difference. Then, we performed a mode-based analysis with the goal to explore dependencies between the deviation of OSM POI and external factors. Therefore, various indicators and features were calculated and engineered for all areas.

We then set up the hypothesis that the small size of the surveyed area might be too individual to explain correlations. Therefore, indicators and features were also calculated for the surroundings of the areas for a buffer of 0.5 km, 1.0 km, and 2.5 km as well as for the municipal level. The goal is to find out whether some indicators have an extraordinary influence which would lead to a structural distortion of the destination choice. In the following subsections, the preparation of the data and the indicators is described.

### Ground Truth Data

To extrinsically validate the OSM data, we manually located POI in 49 survey areas throughout Germany. These survey areas are located in 17 mostly larger cities such as Dresden, Hamburg, or Munich. Nevertheless, survey areas in smaller cities close to these larger cities are also part of the ground truth data. However, even these smaller cities are predominantly located in urban regions (see [Figure 1](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig1-03611981231169280)). The data collection was conducted as part of the project _Cities in Charge_, in which charging infrastructure for electric vehicles is planned, built, and evaluated. Therefore, the survey areas are located in the vicinity of the built charging infrastructure and include different types of neighborhoods from the city center to the outskirts (see the Descriptive Analysis section). To maximize the number of observations, cities with multiple charging infrastructures in the project were predominantly selected for data collection. We catalogued each externally visible POI into different survey categories in a census-grid-based near-circular area with a size of 37 ha surrounding the charging infrastructure. The resulting buffer has a radius of approx. 350 m. In a case where a POI could be assigned to multiple survey categories, we catalogued that POI in each assignable category. Data collection was conducted once per survey area between October 2019 and September 2021 and took between 20 min and 3 h for each survey area, depending on the density of the street network and the number of POI.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/f62512a9-429f-429f-8b74-704013cd5ccb/assets/images/large/10.1177_03611981231169280-fig1.jpg)Figure 1. Map of the cities where the areas of investigation are located.

### Data Preparation

We want to investigate the deviation between the number of OSM POI and real-world POI: we aim to find interrelations to be able to explain the deviation. Therefore, we first calculate features based on open data which describe the spatial context of the survey sites (e.g., land use data) on the one hand and intrinsic OSM data measures on the other hand.

Since the calculated indicators differ in spatial granularity, we calculated them for different areas surrounding the survey site to investigate on which granularity each feature is most significant. Overall, we calculated the features for the survey site area, a 0.5 km, 1.0 km, and 2.5 km buffer around the centroid of the survey site as well as for the municipality the survey site was in.

#### OSM POI Data

The corresponding state of the OSM database at the time of the survey was extracted by querying the OSM history database (OSHDB) using the ohsome API ( [https://api.ohsome.org](https://api.ohsome.org/)) ( _[13](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr13-03611981231169280)_). The result of the queries is the total number of elements for each retrieved tag in the survey areas at the point of time of the site visit. [Table 1](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#table1-03611981231169280) shows an example of the tag list used for the activity “private business.” It shows that many very different POI need to be assigned to a single activity of a travel demand model. The resulting data set consists of OSM POI for all areas of investigation for the activities _private business_ and _shopping_.

Table 1. Tag List for the Activity Type _Private Business_

| Key | Value |
| --- | --- |
| amenity | pharmacy, bank, driving\_school, language\_school, car\_rental, car\_wash, vehicle\_inspection, brothel, love\_hotel, animal\_boarding, internet\_cafe, funeral\_hall, place\_of\_mourning, studio, post\_depot, animal\_breeding, animal\_shelter, crematorium, dentist, doctors, clinic, hospital, police, post\_office, veterinary, courthouse, townhall |
| shop | travel\_agency, hairdresser, massage, tattoo, bookmaker, copyshop, dry\_cleaning, funeral\_directors, laundry, money\_lender, storage\_rental, jewelry, locksmith, tailor, watches, car\_repair |
| craft | basket\_maker, cabinet\_maker, car\_painter, clockmaker, cooper, dressmaker, electronics\_repair, embroiderer, engraver, goldsmith, handicraft, jeweller, joiner, key\_cutter, locksmith, musical\_instrument, photographer, pottery, saddler, shoemaker, stonemason, stove\_fitter, tailor, tinsmith, turner, watchmaker |
| healthcare | psychotherapist, alternative, audiologist, birthing\_center, blood\_bank, blood\_donation, counselling, dialysis, laboratory, midwife, nurse, occupational\_therapist, physiotherapist, podiatrist, rehabilitation, sample\_collection, speech\_therapist, vaccination\_centre |
| office | accountant, lawyer, notary, tax\_advisor, coworking, financial\_advisor, harbour\_master, insurance, political\_party, religion, travel\_agent, union, advertising\_agency, architect, association, charity, company, consulting, courier, diplomatic, energy\_supplier, engineer, estate\_agent, financial, forestry, geodesist, graphic\_design, guide, harbour\_master, it, logistics, moving\_company, newspaper, ngo, property\_management, quango, research, security, surveyor, telecommunication, water\_utility |

#### Contributor Indicator

The number of active contributors in the respective area, the 1 km buffer, and the 2.5 km buffer were used as an intrinsic indicator. We calculated two variants: the number of all contributors and the number of contributors who dealt with POI. The hypothesis was that higher OSM contributor activity is associated with higher POI completeness.

#### POI Densities

POI densities per square kilometer for the most common activities in each area were calculated based on the OSM taglists developed in Klinkhardt et al. for all spatial levels ( _[12](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr12-03611981231169280)_).

#### Land Cover Data

Land use and land cover data derived from the European Copernicus programme—CORINE Land Cover (CLC)—were used to calculate the shares of land usage ( _[14](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr14-03611981231169280)_). CLC is the best-known European database on land use. It has been in use since 1990 and has been regularly updated and validated ( _[15](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr15-03611981231169280)_). For this examination, CLC 2018 is used. We aggregated the original categories of the CLC data to areas of similar land use ( _continuous urban fabric_, _discontinuous urban fabric_, _industrial or commercial units_, _transport_, _construction sites_, _green urban areas_, _sport and leisure facilities_, _agriculture_, _forest_, _nature_, _other_). More details on the land use categories can be found in the CLC technical documentation ( _[16](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr16-03611981231169280)_). Since the categories _continous urban fabric_ and _discontinous urban fabric_ were strongly correlated in our data, we aggregated them to a new category _urban fabric_.

#### Official Data

Using official data from the 2011 German census, we were able to determine the population, dwellings and buildings in the areas of investigation ( _[17](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr17-03611981231169280)_). For this purpose we aggregated the 1 ha information for all census grids inside the areas of investigation. Furthermore, we used the 1 km × 1 km grid level to determine the number of inhabitants on a higher level and the age composition of the population. In addition, the population density was calculated at the level of zip codes. The Regional Statistical Spatial Typology for Mobility and Transport Research of the Federal Ministry of Transport and Digital Infrastructure Germany was used as additional governmental data.

#### Manually Created Indicators for Describing the Location

Some influencing factors could not be calculated, whereas a qualitative description of the survey areas was conducted. The distance from the centroid of the survey area to the nearest city center was measured. Also, the location in the city was qualitatively assessed using several categories. In addition, the building structure was classified into several categories.

#### Saturation Indicator

OSHDB stores the complete history of OSM, allowing to follow OSM contributions over time. The underlying assumption is that, for a specific category and region, contributions converge against the number of real-world objects in the area, given a sufficient OSM contributor activity. Saturation curves can be used to estimate the saturation level which represents an estimator for the true number of objects in a region.

Monthly counts of POI of the different categories were extracted from OSM using the ohsome API ( [https://api.ohsome.org](https://api.ohsome.org/)) to query OSHDB for the time frame October 8, 2007, until May 29, 2022 ( _[13](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr13-03611981231169280)_). The same filter as in the collection of the POI data was used (i.e., 1). We followed an approach similar to Brückner et al. and fitted various limited growth curves to the OSM history for each survey area and estimated the completeness level via their saturation parameter ( _[18](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr18-03611981231169280)_). The curves used originate from two families: the three and four parameter logistic function ( [Equations 1](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#disp-formula1-03611981231169280) and [2](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#disp-formula2-03611981231169280)), that belong to the sigmoid curve family as well as the rectangular hyperbola ( [Equation 3](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#disp-formula3-03611981231169280)) and the asymptotic function ( [Equation 4](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#disp-formula4-03611981231169280)) that belong to the non-logistic growth curves family. The family of sigmoid curves is suitable for a three-phase mapping process as also described by Barrington-Leigh and Millard-Ball ( _[19](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr19-03611981231169280)_). Curves of the non-logistic growth curves family tend to represent a mapping process without the initial phase of slow growth.

y=Asym1+etmid−tscale

(1)

y=Asymlow+Asym−Asymlow1+etmid−tscale

(2)

y=Asym\*tt1/2+t

(3)

y=Asym+(y0−Asym)\*e−elrc\*t

(4)

where

•

Asmp = asymptote to which the curve converges,

•

Asmplow = lower asymptote,

•

t = time at which half the saturation level is attained,

•

tmid = mid point of the logistic curve,

•

scale = the steepness of the logistic curve,

•

t1/2 = time at 50% saturation,

•

y0 = count of OSM contributions at the beginning of the period,

•

rc = rate constant (parameter that determines the spread of the curve with time), and

•

lrc = log of the rate constant.

The curves were fitted separately for each of the POI categories. The reliability of the estimated asymptotes by the four functions was checked by several tests. We checked for an overall decline in growth, which is a fundamental criterion to estimate a saturation level as a proxy for the number of retail stores. Fitted models were filtered for unrealistic fits where the asymptote was estimated to be lower than the current number of POI of the category in OSM. To also account for the uncertainty of the models, we accepted fits with an asymptote at most 2% lower than the actual latest amount. In addition to the non-linear least square fit we also tested robust methods for all four types of the saturation curve. We used an M-estimator for the robust versions. We chose the best-fitting functional form of all accepted curves for each spatial unit based on the AIC. The completeness level was estimated as the quotient of the current number of retail stores and the asymptote of the estimated saturation curve.

As saturation curves can presumably be estimated more reliably for larger areas with more real-world objects, we also applied the saturation estimation for different buffer sizes around the original location polygons: 0.5 km, 1 km, and 2.5 km were explored. While saturation curve fitting can be assumed to be more reliable, this trades off with representativeness for the survey areas.

The analysis was performed in R, using the packages: ohsome ( [https://github.com/GIScience/ohsome-r](https://github.com/GIScience/ohsome-r)), robustbase, sf, geojsonsf, tidyverse, ggplot2, and ggpubr ( _[20](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr20-03611981231169280)_– _[26](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr26-03611981231169280)_).

## Analysis

Having calculated the features mentioned before, we then compared the surveyed and the OSM POI data for the activities _shopping_ and _private business_. For this, we used the count of POI, the relative deviation of OSM POI compared with real-world POI, and the difference of OSM POI compared with real-world POI as response variables. In the following, we will first compare the counted OSM POI descriptively with the surveyed POI. This is followed by several model-based approaches to reveal structural influences on POI completeness.

### Descriptive Analysis

In total, 1,305 POI of the activity _private business_ were counted on site in contrast to 292 POI in OSM. Consequently, only 22% of the locations were mapped, on average. The situation was better for the activity _shopping_. Here, 379 POI were present on site and 277 POI in OSM, which led to a completeness of 73%. These differences between activities can also be observed in [Figure 2](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig2-03611981231169280). Based on linear regression, we calculated balance lines for both graphs. The gradient for _shopping_ was much steeper and thus much closer to the bisector on which all points would lie with complete OSM data. It can also be seen that _private business_ was not only more incomplete, but also subject to much greater dispersion. One reason for this is that POI for _shopping_ are usually highly visible to the outside to attract walk-in customers. Also, the volume of customers at POI associated with _shopping_ is usually higher than at POI associated with _private business_. These observations can also be quantified. As a result of the linear regression, we find that for every _private business_ POI in OSM there are 4.1786 POI in the real world with a standard error of 0.48 and a _p_-value of 3.028e-11. For _shopping_ the value is 1.37 with a standard error of 0.05 and a _p_-value below 2.2e-16. The comparatively good coverage of stores in OSM even results in nine areas having more stores listed in OSM than actually exist, in many cases because of store closures. The COVID-19 pandemic may have increased this effect. Although the number of POI listed in OSM only exceeded the number of real-world POI by a maximum of three stores, this effect must still be taken into account in the analysis. The use of such data in traffic demand models can significantly overestimate the traffic demand depending on the importance of the POI. Because of a lower general completeness of _private business_ POI (see [Figure 2](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig2-03611981231169280)) and a lower volume of customers, the removal of closures of these POI from the OSM database is not as important as the removal of POI associated with _shopping_. Closed POI associated with _private business_ can be compensated in the study areas by POI of the same category not listed in OSM. Overestimation of traffic demand may still occur, but is not as likely.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/0d6c3934-b0e8-4837-ba94-e9e2e02c8b8a/assets/images/large/10.1177_03611981231169280-fig2.jpg)

Figure 2. Correlation between points of interest (POI) in OpenStreetMap (OSM) and POI in real-world: ( _a_) _shopping_ and ( _b_) _private business_.

_Note_: grey line = the bisector; red line = a straight line from linear regression.

Therefore, [Figure 2](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig2-03611981231169280) also shows the share of urban areas in the respective survey area. It shows that most of the dense urban areas include a higher number of real-world POI. Nevertheless, explaining the dispersion based on the land use _urban fabric_ alone does not seem to be sufficient.

In a further step, the dependence of the deviation on the real number of POI was examined ( [Figure 3](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig3-03611981231169280)). It can be seen that, for both activities, the more POI there were in reality, the more POI were missing. In this case, the correlation was more pronounced for _private business_, which is evident from the higher slope of the compensation line. The graph also shows the relative deviation based on the coloring. It is noticeable that the largest differences tend to lead to smaller relative deviations.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/ed3052f1-38b2-4166-98b7-fde0490568c2/assets/images/large/10.1177_03611981231169280-fig3.jpg)

Figure 3. Correlation between deviation and the number of points of interest (POI) in OpenStreetMap (OSM) for ( _a_) _shopping_ and ( _b_) _private business_.

_Note_: red line = a straight line from linear regression.

We also graphically evaluated the saturation indicator in the form of [Figure 4](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig4-03611981231169280). A comparison is made with the relative deviation that could be observed in reality, since the saturation factor also tries to reflect this relationship. The bisector is shown in gray, on which all points would lie if the indicator had perfect significance. Because of the lack of a minimum number of OSM elements, no saturation curve could be estimated for some areas. For these areas, the saturation indicator is 0. In the graphical evaluation, there is hardly any correlation between the relative deviation and the indicator. This is true for both activities and also for all buffer sizes examined. Consequently, this intrinsic indicator alone is not sufficient to explain the dispersion of deviations. In the following, the interaction of different indicators will be examined.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/3edb4232-3052-4600-b868-c4ebe90c0995/assets/images/large/10.1177_03611981231169280-fig4.jpg)

Figure 4. Correlation between relative deviation and estimated saturation for the surveyed areas, a 1 km buffer, and a 2.5 km buffer for ( _a_) _shopping_ and ( _b_) _private business_.

_Note_: red dot = surveyed areas; purple dots = 1 km buffer; blue dot = 2.5 km buffer.

### Model Estimation

To explore dependencies between the features described above and the absolute and relative deviation of OSM POI from real-world POI, we used regression models. Since the number of data points was rather small and we only performed an analysis and no prediction, we did not split into test and training data. Therefore, we expect the model to be overfitted and, consequently, rather focus on qualitative model analyses. For the model analysis, we used the pycaret package for python with all its related packages ( _[27](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr27-03611981231169280)_).

We processed the data to be suitable for regression models. First, we created dummy variables for categorical variables. Second, we checked the data for multicollinearity and applied the built-in function of pycaret to drop one of two identified features using a threshold of 0.8. Third, we dropped features with low variance, which met both of the following conditions: either the count of unique values in a feature divided by the sample size is smaller than 10% or the count of the most common value divided by the count of the second most common value is larger than 20.

We first derived the most suitable model type testing several model types (e.g., random forest, extreme gradient boosting, naive Bayes) on our data and compared the model scores (e.g., R2, RSME). We focused on non-linear model types since we wanted our model to be able to capture non-linear effects without any restrictions. We found that adaptive boosting (AdaBoost) regression models performed best on our data ( _[28](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr28-03611981231169280)_). AdaBoost models combine multiple weak learners and optimize them in an ensemble with boosting ( _[29](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr29-03611981231169280)_). In this case, as base estimator from which the boosted ensemble is built, simple decision trees with a maximum depth of three levels are used.

The quantitative metrics for model performance for the AdaBoost regression models for the activities _shopping_ and _private business_ show a good fit. The R2 are ( R2 shopping: 0.974, R2 private business: 0.902) and the root mean square error (RSME shopping: 0.059, RSME private business: 0.092) better for the model for _shopping_. An R2 value higher than 0.9 for both models indicates overfitting for both models. This is expected, since the models were trained on all data points with a boosting algorithm. Because the metrics could consequently only be calculated on the same data points as well, overfitting can not be verified. However, since the purpose of the models is the analysis of the data and not prediction, possible overfitting causes the findings to be only data-specific. The reader should keep that in mind for the following of this paper.

### Model-Based Analysis

Since AdaBoost models do not provide interpretative parameters in the way that parametric regression models do, we need to use other measures to gain insights into the data. Two popular measures are variable importance measures (VIM) and partial or feature dependence plots. As measure for both analyses, we used the Shapley additive explanations (SHAP) values ( _[30](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr30-03611981231169280)_). SHAP values attribute the average feature contribution with respect to the prediction of the response. The SHAP value can take positive (positive contribution) and negative (negative contribution) values. Since VIM usually only show the overall importance of the independent variable for the prediction of the dependent variable, we used the absolute SHAP values. For the feature dependence plots, to further analyze the data and gain more insights, we used the regular SHAP values with signs. However, these measures are only capable of providing qualitative insights (e.g., positive or negative influence). Since the size of the data set is rather small, quantitative analyses would be limited anyway.

The choice of the dependent variable is crucial for the explanatory power of the model. To derive a suitable dependent variable for model analysis, the following aspects have to be taken into account. The absolute deviation between OSM POI and real-world POI depends on the number of real-world POI—a larger total number of real-world POI increases the likelihood of missing POI in OSM. Further, the importance of the measured difference between OSM POI and real-world POI decreases significantly as the number of POI increases (see [Figure 3](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig3-03611981231169280)). In that case, the ratio between OSM POI and real-world POI is a more suitable dependent variable. Nevertheless, when the number of observations is small, the use of a ratio is problematic because of a high influence of random interference. Additionally, the optimal ratio between OSM POI and real-world POI of unity can lead to problems in the interpretation of the model results. For ratios larger than unity, a decrease in the SHAP value indicates a positive influence, whereas it is the opposite case for ratios smaller than unity. Therefore, without looking at single data points, it would be almost impossible to interpret a positive or negative SHAP value in the feature dependence plots.

Consequently, two main requirements arise that the dependent variable should satisfy. First, it should account for the absolute deviation depending on the total number of real-world POI, which leads to a relative value. Second, since we need to use a relative value, the best case is a ratio of 1. Therefore, cases of a ratio larger or smaller than 1 should be handled equally. These requirements lead to the calculation of a new dependent variable _v_ (as shown in [Equation 5](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#disp-formula5-03611981231169280)) to measure the completeness of OSM POI. While the difference between real-world POI and OSM POI describes the completeness of the OSM database, the ratio of completeness to real-world POI allows us to handle different amounts of POI measured. Moreover, the absolute of the ratio allows the model to treat negative and positive deviations equally.

v=\|numPOIReal−World−numPOIOSMnumPOIReal−World\|

(5)

#### Variable Importance Measures (VIM)

[Figure 5](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig5-03611981231169280) shows the VIM for the activities _shopping_ and _private business_. The SHAP value was used as the measure of variable importance. Whereas intrinsic OSM features (saturation index, POI density) and demographic features were the most important features for the completeness of _shopping_ POI, land use features were the most important features for the completeness of _private business_ POI. The important land use categories for the completeness of _shopping_ POI described mainly urban context, whereas for the completeness of _private business_ POI, urban ( _urban fabric_, _green urban areas_), and non-urban context ( _other_) were ranked high in the VIM. Taking into account that in data processing, strong multicollinearity was eliminated, one can assume that the various spatial resolutions were not strongly correlated and could therefore be combined in one model, although only focusing on one spatial resolution in model analysis is insufficient. This theory is also supported because the features showed no preference for a specific area size. Some features were even important for different area sizes. Consequently, in the further analysis, we focus on the features themselves rather than on the area size they are calculated for.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/81455275-c4ec-4f1b-9814-5300c4efd410/assets/images/large/10.1177_03611981231169280-fig5.jpg)

Figure 5. Variable importance measures (20 highest) of the adaptive boosting (AdaBoost) models for ( _a_) _shopping_ and ( _b_) _private business_.

_Note_: OSM = OpenStreetMap; POI = point of interest; SHAP = Shapley additive explanations.

#### Land Use

[Figure 6](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig6-03611981231169280) shows the feature dependencies for the shares of the land use features _urban fabric_ in the survey areas and _sport and leisure facilities_ in the 1.0 km buffers, as well as the density of the corresponding POI densities in the survey areas. Whereas the POI density increases for both activity types with the share of the _urban fabric_ areas, this is not the case for the land use areas for _sport and leisure facilities_.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/4991c618-1fde-4875-bdf7-1e781a49820a/assets/images/large/10.1177_03611981231169280-fig6.jpg)

Figure 6. Feature dependence plots for land use features _urban fabric_ and _sport and leisure facilities_ for _shopping_ ( _a_, _c_) and _private business_ ( _b_, _d_).

_Note_: POI = point of interest; SHAP = Shapley additive explanations.

This indicates that _sport and leisure facilities_ can be located both in dense and less dense built environments. The feature dependence for the respective land use shares shows that the completeness of _shopping_ POI is influenced by the urban density, which is not the case for _private business_ POI. A larger share of _urban fabric_ areas as well as higher POI densities rather indicates a worse completeness of _private business_ POI. This could be because many facilities for the activity _private business_ can hardly be recognized on passing by, which is important for being considered in OSM, as previous work indicated ( _[12](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr12-03611981231169280)_). Looking at both land use and POI density the results indicate that hidden _private business_ POI occur more often in dense urban environments. However, higher land use shares for _sport and leisure facilities_ indicate a higher completeness for both activities, since they are usually large attractors and therefore might also attract other POI to settle around.

#### Historical OSM Data

[Figure 7](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig7-03611981231169280) shows the feature dependencies for the intrinsic OSM features based on the saturation indicator and the number of persons who have contributed to OSM in the survey area so far based on historical data. The indicators on which the analyzed features are based on have not been evaluated with real-world data yet, so this is the first time their explanatory power can be analyzed using extrinsic data. As already seen in the VIM, the saturation indicator has an important influence on the completeness.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/54c5860d-e160-4c8f-b5be-7b177de0957b/assets/images/large/10.1177_03611981231169280-fig7.jpg)

Figure 7. Feature dependence plots for intrinsic OpenStreetMap (OSM) features based on the saturation index and number of OSM contributors for ( _a_) _shopping_ and ( _b_) _private business_.

_Note_: SHAP = Shapley additive explanations.

The feature dependence plots show that the influence is as expected for both activities: for a saturation lower than 100%, the influence on the deviation of the number of POI is positive, resulting in lower completeness. Around 100% saturation rate, the influence turns into negative figures, indicating a higher completeness. Further, the plots show that the saturation indicator is not correlated linear with the number of contributors and therefore has no effect on this dependency.

#### Current OSM Data

[Figure 8](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig8-03611981231169280) shows the feature dependencies for the intrinsic OSM features based on the density of OSM POI and the distance from the centroid if the survey area to the city center is based on current data. It can be seen that higher POI densities also have a positive influence on the completeness. However, this effect is more distinct for _shopping_ than for _private business_. For shopping, lower densities might also correlate with the distance to the city center, whereas this effect is also not as strong for _private business_. Further, shows that the effect does not increase linearly with the POI density, but is approaching an asymptote and is more or less constant for densities above 10.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/9cac4c5f-d021-472e-8ad9-b20f108c7b87/assets/images/large/10.1177_03611981231169280-fig8.jpg)

Figure 8. Feature dependence plots for intrinsic OpenStreetMap (OSM) features based on the number and densities of points of interest (POI) for ( _a_) _shopping_ and ( _b_) _private business_.

_Note_: SHAP = Shapley additive explanations.

#### Socio-Demographics

[Figure 9](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#fig9-03611981231169280) shows the feature dependencies for the demographic indicators based on the number of inhabitants. For both activities, different spatial aggregations for the indicators were chosen because of the screening for multicollinearity in data preprocessing. We found that with an increasing number of inhabitants the completeness was influenced positively on different spatial aggregation levels. For both activities, the number of inhabitants might also correlate with POI density. However, the effect was larger for _shopping_ as for POI densities. Furthermore, the influence of the number of inhabitants on completeness was also not linear and seemed to approach an asymptote for more than 5,000 inhabitants per square kilometer for the 1.0 km raster grid and 20,000 inhabitants for the zip code areas.

![](https://journals.sagepub.com/cms/10.1177/03611981231169280/asset/b65b6fca-9a9e-44e0-9b9e-aa591f619b79/assets/images/large/10.1177_03611981231169280-fig9.jpg)

Figure 9. Feature dependence plots for demographic features based on the number of inhabitants for ( _a_) _shopping_ and ( _b_) _private business_.

_Note_: POI = point of interest; SHAP = Shapley additive explanations.

## Conclusion

In this work, we assessed the quality of POI data from OSM. We compared POI from OSM with large-scale real-world data surveyed in 49 areas. These areas are spread all over Germany and mostly represent urban and suburban areas. The quality assessment was optimized for the use as demand and supply data for travel demand models. Therefore, we categorized the POI of common activities used in travel demand models and chose the activities _shopping_ and _private business_ as example categories for this work.

We found that, for both categories, the POI are not completely mapped in OSM. The deviation of OSM POI and real-world POI is higher for _private business_ POI, though. This could be because shops have to attract customers and therefore have a higher visibility (e.g., signs or display windows), whereas _private business_ POI (e.g., doctors, small agencies, small craft businesses) often lack visibility. This finding is in line with our findings from previous work ( _[12](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr12-03611981231169280)_).

We also found for both activities that more dense urban areas imply a higher completeness of OSM POI, although this effect is stronger for _shopping_ POI. We therefore can also confirm previous findings from the literature ( _[1](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr1-03611981231169280)_, _[8](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr8-03611981231169280)_, _[9](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#bibr9-03611981231169280)_).

We further found that intrinsic indicators, such as the saturation index, constitute a good measure to assess the broad level of completeness. Since surveying real-world data is very cumbersome, this finding reinforces intrinsic measures and supports that further research is important to improve intrinsic quality measures to assess the quality of OSM data.

However, our work is only based on the data of 49 survey sites. Therefore, although the locations are spread all over Germany, the models are expected the be overfitted on the data from the survey sites. Transferring the results to whole of Germany, or even Europe or the rest of the world, should therefore be done with care. However, with our results being in line with previous findings, we argue that more general findings can be transferred quite well.

Consequently, for our future work, we will collect more data by locating additional real-world POI in up to 50 other survey areas, also focusing on more rural areas. Additional data might allow splitting up the data in training and validation data and, therefore, allow to train a model which is able to predict the completeness of OSM POI. This is important because, for the use in travel demand models, not only the knowledge about incomplete POI is relevant, but also the amount of the deviation to be able to weight the OSM data to derive realistic input data.

## Declaration of Conflicting Interests

The author(s) declared no potential conflicts of interest with respect to the research, authorship, and/or publication of this article.

## Funding

The author(s) disclosed receipt of the following financial support for the research, authorship, and/or publication of this article: The survey was conducted in the project _Cities in Charge_ (reference no. 01 MZ 18005C), funded by the German Federal Ministry for Economic Affairs and Climate Action. Sven Lautenbach acknowledge funding by the Klaus-Tschira Stiftung. We also would like to thank all OSM contributors.

## ORCID iDs

Christian Klinkhardt [https://orcid.org/0000-0001-7176-5885](https://orcid.org/0000-0001-7176-5885)

Fabian Kühnel [https://orcid.org/0000-0002-5383-8574](https://orcid.org/0000-0002-5383-8574)

Michael Heilig [https://orcid.org/0000-0001-8423-6632](https://orcid.org/0000-0001-8423-6632)

Sven Lautenbach [https://orcid.org/0000-0003-1825-9996](https://orcid.org/0000-0003-1825-9996)

Tim Wörle [https://orcid.org/0000-0002-7406-0810](https://orcid.org/0000-0002-7406-0810)

Peter Vortisch [https://orcid.org/0000-0003-1647-2435](https://orcid.org/0000-0003-1647-2435)

Tobias Kuhnimhof [https://orcid.org/0000-0003-3028-3040](https://orcid.org/0000-0003-3028-3040)

## References

1. Haklay M. How Good is Volunteered Geographical Information? A Comparative Study of OpenStreetMap and Ordnance Survey Datasets. _Environment and planning B: Planning and design_, Vol. 37, No. 4, 2010, pp. 682–703.

[Crossref](https://journals.sagepub.com/servlet/linkout?suffix=e_1_3_2_2_2&dbid=4&doi=10.1177%2F03611981231169280&key=10.1068%2Fb35097&site=sage)

[Web of Science](https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&DestApp=WOS_CPL&UsrCustomerID=5e3815c904498985e796fc91436abd9a&SrcAuth=atyponcel&SrcApp=literatum&DestLinkType=FullRecord&KeyUT=WOS%3A000281366500008)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=How+Good+is+Volunteered+Geographical+Information%3F+A+Comparative+Study+of+OpenStreetMap+and+Ordnance+Survey+Datasets&author=M.+Haklay&publication_year=2010&journal=Environment+and+planning+B%3A+Planning+and+design&pages=682-703&doi=10.1068%2Fb35097)

2. Rieser N., Tasnády, Friedrich M., Pestel E. Qualitätssicherung von Verkehrsmodellen, SVI Schweizerische Vereinigung der Verkehrsingenieureund Verkehrsexperten, 2019. [https://www.svi.ch/media/upload/publications\_fr/2f55fc20\_Leitfaden-2019-01\_QS\_Verkehrsmodelle\_191108.pdf](https://www.svi.ch/media/upload/publications_fr/2f55fc20_Leitfaden-2019-01_QS_Verkehrsmodelle_191108.pdf)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Qualit%C3%A4tssicherung+von+Verkehrsmodellen&author=N.+Rieser&author=Tasn%C3%A1dy&author=M.+Friedrich&author=E.+Pestel)

3. Department for Transport. _Transport Analysis Guidance UNIT M1.2 -Data Sources and Surveys_. Department for Transport, London, 2020.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Transport+Analysis+Guidance+UNIT+M1.2+-Data+Sources+and+Surveys&publication_year=2020)

4. Jonietz D., Zipf A. Defining Fitness-for-Use for Crowdsourced Points of Interest (POI). _ISPRS International Journal of Geo-Information_, Vol. 5, No. 9, 2016, p. 149. [https://doi.org/10.3390/ijgi5090149](https://doi.org/10.3390/ijgi5090149).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Defining+Fitness-for-Use+for+Crowdsourced+Points+of+Interest+%28POI%29&author=D.+Jonietz&author=A.+Zipf&publication_year=2016&pages=149&doi=10.3390%2Fijgi5090149)

5. Yeow L. W., Low R., Tan Y. X., Cheah L. Point-of-Interest (POI) Data Validation Methods: An Urban Case Study. _ISPRS International Journal of Geo-Information_, Vol. 10, No. 11, 2021, p. 735.

[Crossref](https://doi.org/10.3390/ijgi10110735)

[Web of Science](https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&DestApp=WOS_CPL&UsrCustomerID=5e3815c904498985e796fc91436abd9a&SrcAuth=atyponcel&SrcApp=literatum&DestLinkType=FullRecord&KeyUT=WOS%3A000726714100001)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Point-of-Interest+%28POI%29+Data+Validation+Methods%3A+An+Urban+Case+Study&author=L.+W.+Yeow&author=R.+Low&author=Y.+X.+Tan&author=L.+Cheah&publication_year=2021&journal=ISPRS+International+Journal+of+Geo-Information&pages=735&doi=10.3390%2Fijgi10110735)

6. Hochmair H. H., Juhász L., Cvetojevic S. Data Quality of Points of Interest in Selected Mapping and Social Media Platforms. Proc., LBS 2018: 14th International Conference on Location Based Services, Springer, Cham, Switzerland, 2018, pp. 293–313.

[Crossref](https://doi.org/10.1007/978-3-319-71470-7_15)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Data+Quality+of+Points+of+Interest+in+Selected+Mapping+and+Social+Media+Platforms&author=H.+H.+Hochmair&author=L.+Juh%C3%A1sz&author=S.+Cvetojevic&publication_year=2018&pages=293-313&doi=10.1007%2F978-3-319-71470-7_15)

7. Touya G., Antoniou V., Olteanu-Raimond A. -M., Van Damme M. -D. Assessing Crowdsourced POI Quality: Combining Methods Based on Reference Data, History, and Spatial Relations. _ISPRS International Journal of Geo-Information_, Vol. 6, No. 3, 2017, p. 80.

[Crossref](https://doi.org/10.3390/ijgi6030080)

[Web of Science](https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&DestApp=WOS_CPL&UsrCustomerID=5e3815c904498985e796fc91436abd9a&SrcAuth=atyponcel&SrcApp=literatum&DestLinkType=FullRecord&KeyUT=WOS%3A000398732200023)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Assessing+Crowdsourced+POI+Quality%3A+Combining+Methods+Based+on+Reference+Data%2C+History%2C+and+Spatial+Relations&author=G.+Touya&author=V.+Antoniou&author=A.+-M.+Olteanu-Raimond&author=M.+-D.+Van+Damme&publication_year=2017&journal=ISPRS+International+Journal+of+Geo-Information&pages=80&doi=10.3390%2Fijgi6030080)

8. Yang S., Shen J., Konečný M., Wang Y., Štampach R. Study on the Spatial Heterogeneity of the POI Quality in OpenStreetMap. Proc., 7th International Conference on Cartography and GIS, Bulgarian Cartographic Association, Sozopol, Bulgaria, 2018, pp. 18–23.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Study+on+the+Spatial+Heterogeneity+of+the+POI+Quality+in+OpenStreetMap&author=S.+Yang&author=J.+Shen&author=M.+Kone%C4%8Dn%C3%BD&author=Y.+Wang&author=R.+%C5%A0tampach&publication_year=2018&pages=18-23)

9. Herfort B., Lautenbach S., Porto de Albuquerque J., Anderson J., Zipf A. The Evolution of Humanitarian Mapping Within the OpenStreetMap Community. _Scientific Reports_, Vol. 11, No. 1, 2021, p. 3037. [https://doi.org/10.1038/s41598-021-82404-z](https://doi.org/10.1038/s41598-021-82404-z).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=The+Evolution+of+Humanitarian+Mapping+Within+the+OpenStreetMap+Community&author=B.+Herfort&author=S.+Lautenbach&author=J.+Porto+de+Albuquerque&author=J.+Anderson&author=A.+Zipf&publication_year=2021&pages=3037&doi=10.1038%2Fs41598-021-82404-z)

10. Goodchild M. F., Li L. Assuring the Quality of Volunteered Geographic Information. _Spatial Statistics_, Vol. 1, 2012, pp. 110–120.

[Crossref](https://doi.org/10.1016/j.spasta.2012.03.002)

[Web of Science](https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&DestApp=WOS_CPL&UsrCustomerID=5e3815c904498985e796fc91436abd9a&SrcAuth=atyponcel&SrcApp=literatum&DestLinkType=FullRecord&KeyUT=WOS%3A000209170800011)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Assuring+the+Quality+of+Volunteered+Geographic+Information&author=M.+F.+Goodchild&author=L.+Li&publication_year=2012&journal=Spatial+Statistics&pages=110-120&doi=10.1016%2Fj.spasta.2012.03.002)

11. Tré G. D., Britsom D. V., Matthé T., Bronselaer A. Automated Cleansing of POI Databases. In _Quality Issues in the Management of Web Information_ (Pasi G., Bordogna G., Jain L., eds.), Springer, Berlin, Heidelberg, Germany, 2013, pp. 55–91.

[Crossref](https://doi.org/10.1007/978-3-642-37688-7_4)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Automated+Cleansing+of+POI+Databases&author=G.+D.+Tr%C3%A9&author=D.+V.+Britsom&author=T.+Matth%C3%A9&author=A.+Bronselaer&publication_year=2013&pages=55-91&doi=10.1007%2F978-3-642-37688-7_4)

12. Klinkhardt C., Woerle T., Briem L., Heilig M., Kagerbauer M., Vortisch P. Using OpenStreetMap as a Data Source for Attractiveness in Travel Demand Models. _Transportation Research Record: Journal of the Transportation Research Board_, 2021\. 2675: 294–303.

[Crossref](https://journals.sagepub.com/servlet/linkout?suffix=e_1_3_2_13_2&dbid=4&doi=10.1177%2F03611981231169280&key=10.1177%2F0361198121997415&site=sage)

[Web of Science](https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&DestApp=WOS_CPL&UsrCustomerID=5e3815c904498985e796fc91436abd9a&SrcAuth=atyponcel&SrcApp=literatum&DestLinkType=FullRecord&KeyUT=WOS%3A000684310300001)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Using+OpenStreetMap+as+a+Data+Source+for+Attractiveness+in+Travel+Demand+Models&author=C.+Klinkhardt&author=T.+Woerle&author=L.+Briem&author=M.+Heilig&author=M.+Kagerbauer&author=P.+Vortisch&publication_year=2021&journal=Transportation+Research+Record%3A+Journal+of+the+Transportation+Research+Board&pages=294-303&doi=10.1177%2F0361198121997415)

13. Raifer M., Troilo R., Kowatsch F., Auer M., Loos L., Marx S., Przybill K., Fendrich S., Mocnik F. -B., Zipf A. OSHDB: A Framework for OSHDB: A Framework for Spatiotemporal Analysis of OpenStreetMap History Data. _Open Geospatial Data, Software and Standards_, Vol. 4, No. 3, 2019, pp. 1–12. [https://doi.org/10.1186/s40965-019-0061-3](https://doi.org/10.1186/s40965-019-0061-3).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=OSHDB%3A+A+Framework+for+OSHDB%3A+A+Framework+for+Spatiotemporal+Analysis+of+OpenStreetMap+History+Data&author=M.+Raifer&author=R.+Troilo&author=F.+Kowatsch&author=M.+Auer&author=L.+Loos&author=S.+Marx&author=K.+Przybill&author=S.+Fendrich&author=F.+-B.+Mocnik&author=A.+Zipf&publication_year=2019&pages=1-12&doi=10.1186%2Fs40965-019-0061-3)

14. ©European Union. _Copernicus Land Monitoring Service 2022_. European Environment Agency (EEA), Copenhagen, Denmark, 2022.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Copernicus+Land+Monitoring+Service+2022&publication_year=2022)

15. Büttner G., Kosztra B., Maucha G., Pataki R., Kleeschulte S., Hazeu G., Vittek M., Schröder C., Littkopf A. Copernicus Land Monitoring Service: CORINE Land Cover: User Manual. European Environment Agency (EEA), Copenhagen, Denmark, 2021.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Copernicus+Land+Monitoring+Service%3A+CORINE+Land+Cover%3A+User+Manual&author=G.+B%C3%BCttner&author=B.+Kosztra&author=G.+Maucha&author=R.+Pataki&author=S.+Kleeschulte&author=G.+Hazeu&author=M.+Vittek&author=C.+Schr%C3%B6der&author=A.+Littkopf&publication_year=2021)

16. Heymann Y., Steenmans C., Croisille G., Bossard M., Lenco M., Wyatt B., Weber J. -L., O’Brian C., Cornaert M. -H., Sifakis N. _Corine Land Cover Technical Guide, Part I_. European Environment Agency, Copenhagen, Denmark, 1994.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Corine+Land+Cover+Technical+Guide%2C+Part+I&author=Y.+Heymann&author=C.+Steenmans&author=G.+Croisille&author=M.+Bossard&author=M.+Lenco&author=B.+Wyatt&author=J.+-L.+Weber&author=C.+O%E2%80%99Brian&author=M.+-H.+Cornaert&author=N.+Sifakis&publication_year=1994)

17. Statistisches Bundesamt (destatis). _Bevölkerung je Hektar: Ergebnisse des Zensus am 09. Mai 2011 in Gitterzellen_. Statistisches Bundesamt, Wiesbaden, Germany, 2018.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Bev%C3%B6lkerung+je+Hektar%3A+Ergebnisse+des+Zensus+am+09.+Mai+2011+in+Gitterzellen&publication_year=2018)

18. Brückner J., Schott M., Zipf A., Lautenbach S. Assessing Shop Completeness in OpenStreetMap for Two Federal States in Germany. _AGILE: GIScience Series_, Vol. 2, 2021, pp. 1–7.

[Crossref](https://doi.org/10.5194/agile-giss-2-20-2021)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Assessing+Shop+Completeness+in+OpenStreetMap+for+Two+Federal+States+in+Germany&author=J.+Br%C3%BCckner&author=M.+Schott&author=A.+Zipf&author=S.+Lautenbach&publication_year=2021&journal=AGILE%3A+GIScience+Series&pages=1-7&doi=10.5194%2Fagile-giss-2-20-2021)

19. Barrington-Leigh C., Millard-Ball A. The World’s User-Generated Road Map is More than 80% Complete. _PLoS One_, Vol. 12, No. 8, 2017, p. e0180698.

[Crossref](https://doi.org/10.1371/journal.pone.0180698)

[Web of Science](https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&DestApp=WOS_CPL&UsrCustomerID=5e3815c904498985e796fc91436abd9a&SrcAuth=atyponcel&SrcApp=literatum&DestLinkType=FullRecord&KeyUT=WOS%3A000407396200005)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=The+World%E2%80%99s+User-Generated+Road+Map+is+More+than+80%25+Complete&author=C.+Barrington-Leigh&author=A.+Millard-Ball&publication_year=2017&journal=PLoS+One&pages=e0180698&doi=10.1371%2Fjournal.pone.0180698)

20. R Core Team. _R: A Language and Environment for Statistical Computing_. R Foundation for Statistical Computing, Vienna, Austria, 2022. [https://www.R-project.org/](https://www.r-project.org/).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=R%3A+A+Language+and+Environment+for+Statistical+Computing&publication_year=2022)

21. Todorov V., Filzmoser P. An Object-Oriented Framework for Robust Multivariate Analysis. _Journal of Statistical Software_, Vol. 32, No. 3, 2009, pp. 1–47. [https://www.jstatsoft.org/article/view/v032i03/](https://www.jstatsoft.org/article/view/v032i03/).

[Crossref](https://doi.org/10.18637/jss.v032.i03)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=An+Object-Oriented+Framework+for+Robust+Multivariate+Analysis&author=V.+Todorov&author=P.+Filzmoser&publication_year=2009&pages=1-47&doi=10.18637%2Fjss.v032.i03)

22. Pebesma E. Simple Features for R: Standardized Support for Spatial Vector Data. _The R Journal_, Vol. 10, No. 1, 2018, pp. 439–446. [https://doi.org/10.32614/RJ-2018-009](https://doi.org/10.32614/RJ-2018-009).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Simple+Features+for+R%3A+Standardized+Support+for+Spatial+Vector+Data&author=E.+Pebesma&publication_year=2018&pages=439-446&doi=10.32614%2FRJ-2018-009)

23. Cooley D. _geojsonsf: GeoJSON to Simple Feature Converter_. R package version 2.0.3. 2022. [https://CRAN.R-project.org/package=geojsonsf](https://cran.r-project.org/package=geojsonsf).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=geojsonsf%3A+GeoJSON+to+Simple+Feature+Converter&author=D.+Cooley&publication_year=2022)

24. Wickham H., Averick M., Bryan J., Chang W., McGowan L. D., François R., Grolemund G., et al. Welcome to the Tidyverse. _Journal of Open Source Software_, Vol. 4, No. 43, 2019, p. 1686. [https://doi.org/10.21105/joss](https://doi.org/10.21105/joss).01686.

[Crossref](https://doi.org/10.21105/joss.01686)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Welcome+to+the+Tidyverse&author=H.+Wickham&author=M.+Averick&author=J.+Bryan&author=W.+Chang&author=L.+D.+McGowan&author=R.+Fran%C3%A7ois&author=G.+Grolemund&publication_year=2019&pages=01686&doi=10.21105%2Fjoss.01686)

25. Wickham H. _ggplot2: Elegant Graphics for Data Analysis_. Springer-Verlag, New York, NY, 2016. [https://ggplot2.tidyverse.org](https://ggplot2.tidyverse.org/).

[Crossref](https://doi.org/10.1007/978-3-319-24277-4)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=ggplot2%3A+Elegant+Graphics+for+Data+Analysis&author=H.+Wickham&publication_year=2016&doi=10.1007%2F978-3-319-24277-4)

26. Kassambara A. _ggpubr: ‘ggplot2’ Based Publication Ready Plots_. R package version 0.4.0. 2020. [https://CRAN.R-project.org/package=ggpubr](https://cran.r-project.org/package=ggpubr).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=ggpubr%3A+%E2%80%98ggplot2%E2%80%99+Based+Publication+Ready+Plots&author=A.+Kassambara&publication_year=2020)

27. Ali M. _PyCaret: An Open Source, Low-Code Machine Learning Library in Python_. 2020\. [https://www.pycaret.org.PyCaretversion1.0.0](https://www.pycaret.org.pycaretversion1.0.0/).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=PyCaret%3A+An+Open+Source%2C+Low-Code+Machine+Learning+Library+in+Python&author=M.+Ali&publication_year=2020)

28. Freund Y., Schapire R. E. A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting. In _Computational Learning Theory_ (Vitányi P., ed.), Springer, Berlin, Heidelberg, Germany, 1995, pp. 23–37.

[Crossref](https://doi.org/10.1007/3-540-59119-2_166)

[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+Decision-Theoretic+Generalization+of+On-Line+Learning+and+an+Application+to+Boosting&author=Y.+Freund&author=R.+E.+Schapire&publication_year=1995&pages=23-37&doi=10.1007%2F3-540-59119-2_166)

29. Kearns M. Thoughts on Hypothesis Boosting, 1988. (Unpublished).

[Google Scholar](https://scholar.google.com/scholar_lookup?title=Thoughts+on+Hypothesis+Boosting&author=M.+Kearns&publication_year=1988)

30. Lundberg S. M., Lee S.-I. A Unified Approach to Interpreting Model Predictions. Proc., NIPS’17, Curran Associates Inc., Long Beach, CA, Red Hook, NY, 2017, pp. 4768–4777.

[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+Unified+Approach+to+Interpreting+Model+Predictions&author=S.+M.+Lundberg&author=S.-I.+Lee&publication_year=2017&pages=4768-4777)

### Cite

#### Cite

Copy Citation

OR

#### Download to reference manager

If you have citation software installed, you can download citation data to the citation manager of your choice

Select your citation manager software:(select option)RIS (ProCite, Reference Manager)EndNoteBibTexMedlarsRefWorks

Direct import

### Share

#### Share this publication

##### Share with email

[Email Link](https://journals.sagepub.com/action/showMailPage?doi=10.1177/03611981231169280)

##### Share on social media

[Facebook](https://journals.sagepub.com/#facebook "Share on Facebook") [X (formerly Twitter)](https://journals.sagepub.com/#twitter "Share on X (formerly Twitter)") [LinkedIn](https://journals.sagepub.com/#linkedin "Share on LinkedIn") [WeChat](https://journals.sagepub.com/#wechat "Share on WeChat")

#### Share access to this article

Sharing links are not relevant where the article is open access and not available if you do not have a subscription.

For more information view the [Sage Journals article sharing\\
page.](https://journals.sagepub.com/page/article-sharing)

### Information

#### Published In

[![Go to  ](https://journals.sagepub.com/cms/asset/4fa7c196-e48a-4f53-8e96-0c44f62414bd/trra_2677_12.largecover.png)\\
\\
View](https://journals.sagepub.com/toc/trra/2677/12 "Go to  ")

[Transportation Research Record](https://journals.sagepub.com/home/trra)

[Volume 2677, Issue 12](https://journals.sagepub.com/toc/trra/2677/12)

Pages: 661 \- 674

**Article first published online**: May 13, 2023

**Issue published**: December 2023

#### Keywords

1. [data and data science](https://journals.sagepub.com/keyword/data+and+data+science)
2. [geographic information science](https://journals.sagepub.com/keyword/geographic+information+science)
3. [planning and analysis](https://journals.sagepub.com/keyword/planning+and+analysis)
4. [transportation demand forecasting](https://journals.sagepub.com/keyword/transportation+demand+forecasting)
5. [destination choice models](https://journals.sagepub.com/keyword/destination+choice+models)

#### Rights and permissions

© National Academy of Sciences: Transportation Research Board 2023.

[![Creative Commons License (CC BY 4.0)](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg)](https://creativecommons.org/licenses/by/4.0/)

This article is distributed under the terms of the Creative Commons Attribution 4.0 Lficense ( [https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)) which permits any use, reproduction and distribution of the work without further permission provided the original work is attributed as specified on the SAGE and Open Access pages ( [https://us.sagepub.com/en-us/nam/open-access-at-sage](https://us.sagepub.com/en-us/nam/open-access-at-sage)).

### Authors

#### Affiliations

ChristianKlinkhardt

Institute for Transport Studies, Karlsruhe Institute of Technology, Karlsruhe, Germany

[https://orcid.org/0000-0001-7176-5885](https://orcid.org/0000-0001-7176-5885)

[christian.klinkhardt@kit.edu](mailto:christian.klinkhardt@kit.edu)

[View all publications by this author](https://journals.sagepub.com/authored-by/Klinkhardt/Christian)

FabianKühnel

Institute of Urban and Transport Planning, RWTH Aachen University, Aachen, Germany

[https://orcid.org/0000-0002-5383-8574](https://orcid.org/0000-0002-5383-8574)

[View all publications by this author](https://journals.sagepub.com/authored-by/K%C3%BChnel/Fabian)

MichaelHeilig

Institute for Transport Studies, Karlsruhe Institute of Technology, Karlsruhe, Germany

[https://orcid.org/0000-0001-8423-6632](https://orcid.org/0000-0001-8423-6632)

[View all publications by this author](https://journals.sagepub.com/authored-by/Heilig/Michael)

SvenLautenbach

HeiGIT gGmbH, affiliated Institute at Heidelberg University, Heidelberg, Germany

[https://orcid.org/0000-0003-1825-9996](https://orcid.org/0000-0003-1825-9996)

[View all publications by this author](https://journals.sagepub.com/authored-by/Lautenbach/Sven)

TimWörle

Institute for Transport Studies, Karlsruhe Institute of Technology, Karlsruhe, Germany

[https://orcid.org/0000-0002-7406-0810](https://orcid.org/0000-0002-7406-0810)

[View all publications by this author](https://journals.sagepub.com/authored-by/W%C3%B6rle/Tim)

PeterVortisch

Institute for Transport Studies, Karlsruhe Institute of Technology, Karlsruhe, Germany

[https://orcid.org/0000-0003-1647-2435](https://orcid.org/0000-0003-1647-2435)

[View all publications by this author](https://journals.sagepub.com/authored-by/Vortisch/Peter)

TobiasKuhnimhof

Institute of Urban and Transport Planning, RWTH Aachen University, Aachen, Germany

[https://orcid.org/0000-0003-3028-3040](https://orcid.org/0000-0003-3028-3040)

[View all publications by this author](https://journals.sagepub.com/authored-by/Kuhnimhof/Tobias)

#### Notes

Christian Klinkhardt, [christian.klinkhardt@kit.edu](mailto:christian.klinkhardt@kit.edu)

#### Author Contributions

The authors confirm contribution to the paper as follows: study conception and design: C. Klinkhardt, F. Kühnel, M. Heilig, S. Lautenbach, T. Wörle, P. Vortisch, T. Kuhnimhof; data collection: C. Klinkhardt, F. Kühnel, M. Heilig, S. Lautenbach, T. Wörle; analysis and interpretation of results: C. Klinkhardt, T. Wörle, F. Kühnel, M. Heilig, S. Lautenbach; draft manuscript preparation: T. Wörle. All authors reviewed the results and approved the final version of the manuscript.

### Metrics

#### Journals metrics

This article was published in _Transportation Research Record_.

[View All Journal Metrics](https://journals.sagepub.com/metrics/trr)

* * *

#### Publication usage\*

Total views and downloads:
2779

_\*Usage tracking began in December 2016 or upon migration to Sage Journals, whichever is later. Prior usage data was not transferred._

* * *

#### Altmetric

See the impact this article is making through the number of times it’s been read, and the Altmetric Score.

[Learn more about the Altmetric Scores](https://www.altmetric.com/)

* * *

#### Publications citing this one

Receive email alerts when this publication is cited

[Sign up to citation alerts](https://journals.sagepub.com/action/addCitationAlert?doi=10.1177%2F03611981231169280)

Web of Science: 17 [view articles Opens in new tab](https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&DestApp=WOS_CPL&UsrCustomerID=5e3815c904498985e796fc91436abd9a&SrcAuth=atyponcel&SrcApp=literatum&DestLinkType=CitingArticles&KeyUT=WOS:000986392000001)

Crossref: 18

01. A global framework to estimate urban spatial cycling patterns based on crowdsourced data

    [Go to citation](https://doi.org/10.1016/j.jtrangeo.2026.104822) [Crossref](https://doi.org/10.1016/j.jtrangeo.2026.104822) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1016/j.jtrangeo.2026.104822)

02. Kayseri’de OpenStreetMap tesis verilerinin eksiksizliği ve konumsal uyumunun belediye referansına dayalı değerlendirilmesi

    [Go to citation](https://doi.org/10.28948/ngumuh.2006572) [Crossref](https://doi.org/10.28948/ngumuh.2006572) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.28948/ngumuh.2006572)

03. Explaining the urban mechanisms behind OpenStreetMap updates: Evidence from 88 German cities

    [Go to citation](https://doi.org/10.1016/j.compenvurbsys.2026.102456) [Crossref](https://doi.org/10.1016/j.compenvurbsys.2026.102456) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1016/j.compenvurbsys.2026.102456)

04. Expanding the 15-minute city through e-micromobility services

    [Go to citation](https://doi.org/10.1007/s10109-026-00513-7) [Crossref](https://doi.org/10.1007/s10109-026-00513-7) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1007/s10109-026-00513-7)

05. SignSpotter: scene text-informed cross-modal semantic consistency verification for street view images and POI data

    [Go to citation](https://doi.org/10.1016/j.jag.2026.105414) [Crossref](https://doi.org/10.1016/j.jag.2026.105414) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1016/j.jag.2026.105414)

06. Machine Learning-Based Travel Demand Estimation Using OpenStreetMap

    [Go to citation](https://doi.org/10.1109/OJITS.2026.3708204) [Crossref](https://doi.org/10.1109/OJITS.2026.3708204) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1109/OJITS.2026.3708204)

07. Leveraging Open-Source Points of Interest Data: Insights from Large-Scale Travel Surveys

    [Go to citation](https://doi.org/10.1016/j.trpro.2026.04.204) [Crossref](https://doi.org/10.1016/j.trpro.2026.04.204) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1016/j.trpro.2026.04.204)

08. Impact of exogenous events on the demand for on-demand ridepooling in Hamburg

    [Go to citation](https://doi.org/10.1016/j.cstp.2025.101572) [Crossref](https://doi.org/10.1016/j.cstp.2025.101572) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1016/j.cstp.2025.101572)

09. An assessment framework for 15-minute Cities: Progress worldwide and the impact of urban form

    [Go to citation](https://doi.org/10.1016/j.tra.2025.104583) [Crossref](https://doi.org/10.1016/j.tra.2025.104583) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1016/j.tra.2025.104583)

10. Inferring ghost cities on the globe in newly developed urban areas based on urban vitality with multi-source data

    [Go to citation](https://doi.org/10.1016/j.habitatint.2025.103350) [Crossref](https://doi.org/10.1016/j.habitatint.2025.103350) [Google Scholar](https://journals.sagepub.com/servlet/linkout?type=google-cite&doi=10.1016/j.habitatint.2025.103350)

11. View More

### Figures & Media

### Tables

### View options

#### PDF/EPUB

[View PDF/EPUB](https://journals.sagepub.com/doi/reader/10.1177/03611981231169280 "Open full-text in eReader")

#### Access options

If you have access to journal content via a personal subscription, university, library, employer or society, select from the options below:

![user icon](https://journals.sagepub.com/specs/products/sage/releasedAssets/images/person-outline-cf8da4d85b29b8f33643440fc5105ea6.svg)Sage Journals profile

I am signed in as:

![](https://journals.sagepub.com/specs/products/sage/releasedAssets/images/person-992e115f27b641a6bcbca03140578bf3.svg)

[View my profile](https://journals.sagepub.com/action/showPreferences) Sign out

I can access personal subscriptions, purchases, paired institutional access and free tools such as favourite journals, email alerts and saved searches.

Login failed. Please check you entered the correct user name and password.


### Sign in

Access personal subscriptions, purchases, paired institutional or society access and free tools such as email alerts and saved searches.


_Required fields_

The email address and/or password entered does not match our records, please check and try again.


Email:

Password:

Remember me

[Forgotten your password?](https://journals.sagepub.com/action/requestResetPassword)

Sign in

OR

[Create profile](https://journals.sagepub.com/action/registration)

Institution

_loading institutional access options_

Click the button below for the full-text content

请点击以下获取该全文

[Click here to view / 点击获取全文](http://sage.cnpereading.com/paragraph/article/?doi=10.1177/03611981231169280)

SocietyChinese Institutions / 中国用户

* * *

Alternatively, view purchase options below:

![cart icon](https://journals.sagepub.com/specs/products/sage/releasedAssets/images/cart-8ed2e21336f2e56ed3920cac8c1cca01.svg)Purchase access

[Item saved, go to cart](https://journals.sagepub.com/action/showCart?FlowID=2)

Purchase 24 hour online access to view and download content.



Issue -



$104.20




Article -


$37.50

Add To Cart


Added to cart

[Checkout](https://journals.sagepub.com/action/showCart?FlowID=2)

[Subscribe to this journal](http://www.sagepub.com/journals/Journal203503/#subscribe)

![read with deepdyve](https://journals.sagepub.com/specs/products/sage/releasedAssets/images/deepdyve-889f06d05baa3f8418569531d3e5e430.svg)Read with DeepDyve

Access journal content via a DeepDyve subscription or find out more about this option.

[Start 2 week free trial](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#)

[Need help?](https://journalssolutions.sagepub.com/support/home)

xrefBack.goTo

xrefBack.goTo

Re-use permissionsOpens in new tabShow all sections

Collapse

Expand Table

Show all references

SHOW ALL BOOKS

Show all sections [View all authors and affiliations](about:blank#tab-contributors)

![](<Base64-Image-Removed>)

Copy link

✓

Thanks for sharing!

Find any service

[AddToAny](https://www.addtoany.com/ "Share Buttons")

[More…](https://journals.sagepub.com/doi/full/10.1177/03611981231169280#addtoany "Show all")

A2A