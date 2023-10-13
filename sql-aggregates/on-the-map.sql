select count ("cities"."name") as "city",
    "countries"."name" as "country"
    from "cities"
    join "countries" using ("countryId")
    group by "countries"."name";
