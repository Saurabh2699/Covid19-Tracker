import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountrySelector.module.css";
import { getCountries } from "../../api";

const Countries = ({ CountrySelect }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const getAllCountries = async () => {
            setCountries(await getCountries());
        };
        getAllCountries();
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                className={styles.nativeselect}
                defaultValue=""
                onChange={(e) => CountrySelect(e.target.value)}
            >
                <option value="">Global</option>
                {countries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default Countries;
