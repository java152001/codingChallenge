export interface FishData {
    FisheryManagement:                   string | null;
    Habitat:                             string | null;
    HabitatImpacts:                      string | null;
    ImageGallery:                        SpeciesIllustrationPhoto[];
    Location:                            string | null;
    Management:                          string | null;
    NOAAFisheriesRegion:                 string | null;
    Population:                          string | null;
    PopulationStatus:                    string | null;
    ScientificName:                      string | null;
    SpeciesAliases:                      string | null;
    SpeciesIllustrationPhoto:            SpeciesIllustrationPhoto;
    SpeciesName:                         string | null;
    AnimalHealth:                        string | null;
    Availability:                        string | null;
    Biology:                             string | null;
    Bycatch:                             string | null;
    Calories:                            string | null;
    Carbohydrate:                        string | null;
    Cholesterol:                         string | null;
    Color:                               string | null;
    DiseaseTreatmentandPrevention:       string | null;
    DiseasesinSalmon:                    string | null;
    DisplayedSeafoodProfileIllustration: string | null;
    EcosystemServices:                   string | null;
    EnvironmentalConsiderations:         string | null;
    EnvironmentalEffects:                string | null;
    FarmingMethods:                      string | null;
    FarmingMethods_:                     string | null;
    FatTotal:                            string | null;
    Feeds_:                              string | null;
    Feeds:                               string | null;
    FiberTotalDietary:                   string | null;
    FishingRate:                         string | null;
    Harvest:                             string | null;
    HarvestType:                         string | null;
    HealthBenefits:                      string | null;
    Human_Health_:                       string | null;
    HumanHealth:                         string | null;
    PhysicalDescription:                 string | null;
    Production:                          string | null;
    Protein:                             string | null;
    Quote:                               string | null;
    QuoteBackgroundColor:                string | null;
    Research:                            string | null;
    SaturatedFattyAcidsTotal:            string | null;
    Selenium:                            string | null;
    ServingWeight:                       string | null;
    Servings:                            string | null;
    Sodium:                              string | null;
    Source:                              string | null;
    SugarsTotal:                         string | null;
    Taste:                               string | null;
    Texture:                             string | null;
    Path:                                string | null;
    last_update:                         string | null;
}

export interface SpeciesIllustrationPhoto {
    src:   string | null;
    alt:   string | null;
    title: string | null;
}

export type NutritionPropertyENUM = "Calories" | "FatTotal"