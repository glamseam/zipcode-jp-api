import axios, { AxiosError } from 'axios'

export interface Options {
    baseUrl?: string
}

export interface Prefecture {
    prefecture_jis_code: string
    prefecture_name_kana: string
    prefecture_name: string
}

export interface City extends Prefecture {
    city_jis_code: string
    city_name: string
    city_name_kana: string
}

export interface Town {
    city_jis_code: City['city_jis_code']
    prefecture_jis_code: Prefecture['prefecture_jis_code']
    town_name: string
    town_name_kana: string
    zip_code: string
}

export interface Address extends City, Town {}

export const getAddressesOfZipCode = (
    zipCode: string,
    { baseUrl = '' }: Options = {}
) => {
    const prefix = zipCode.slice(0, 3)

    return axios.get<Address[]>(
        `zip_code/${prefix}/${zipCode}.json`,
        { baseURL: baseUrl }
    )
        .then((response) => {
            if (response.data[0]) {
                return Promise.resolve({
                    address: {
                        city_jis_code: response.data[0].city_jis_code,
                        city_name: response.data[0].city_name,
                        city_name_kana: response.data[0].city_name_kana,
                        prefecture_jis_code: response.data[0].prefecture_jis_code,
                        prefecture_name: response.data[0].prefecture_name,
                        prefecture_name_kana: response.data[0].prefecture_name_kana,
                        town_name: response.data[0].town_name,
                        town_name_kana: response.data[0].town_name_kana,
                        zip_code: response.data[0].zip_code
                    }
                })
            }

            return Promise.resolve(undefined)
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error)
        })
}

export const getPrefectures = ({ baseUrl = '' }: Options = {}) => {
    return axios.get<Prefecture[]>(
        `prefecture.json`,
        { baseURL: baseUrl }
    )
        .then((response) => {
            return Promise.resolve(response)
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error)
        })
}

export const getCitiesOfPrefecture = (
    prefectureJisCode: string,
    { baseUrl = '' }: Options = {}
) => {
    const prefectureJisCodeWithPad = prefectureJisCode.padStart(2, '0')

    return axios.get<City[]>(
        `city/${prefectureJisCodeWithPad}.json`,
        { baseURL: baseUrl }
    )
        .then((response) => {
            return Promise.resolve(response)
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error)
        })
}

export const getTownsOfCity = (
    cityJisCode: string,
    { baseUrl = '' }: Options = {}
) => {
    const cityJisCodeWithPad = cityJisCode.padStart(5, '0')
    const prefectureJisCode = cityJisCode.slice(0, 2)

    return axios.get<Town[]>(
        `town/${prefectureJisCode}/${cityJisCodeWithPad}.json`,
        { baseURL: baseUrl }
    )
        .then((response) => {
            return Promise.resolve(response)
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error)
        })
}

export const getCity = (
    cityJisCode: string,
    { baseUrl = '' }: Options = {}
) => {
    const prefectureJisCode = cityJisCode.slice(0, 2)

    return getCitiesOfPrefecture(prefectureJisCode, { baseUrl })
        .then((response) => {
            const city = response.data.find((city) => city.city_jis_code === cityJisCode)

            return Promise.resolve(city)
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error)
        })
}
