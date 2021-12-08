import { ref, watchEffect } from 'vue'
import { getAddressesOfZipCode } from './index'

export const useZipcodeJp = (baseUrl: string) => {
    const addressRef = ref({
        zipcode: '',
        prefecture: '',
        city: '',
        town: ''
    })

    watchEffect(() => {
        if (addressRef.value.zipcode.length === 7) {
            getAddressesOfZipCode(addressRef.value.zipcode, { baseUrl })
                .then((response) => {
                    if (response && 'address' in response) {
                        addressRef.value.prefecture = response.address.prefecture_name
                        addressRef.value.city = response.address.city_name
                        addressRef.value.town = response.address.town_name
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    })

    return {
        addressRef,
        getAddressesOfZipCode
    }
}

export const PREFECTURES = [
    {
        prefecture_jis_code: '01',
        prefecture_name_kana: 'ﾎｯｶｲﾄﾞｳ',
        prefecture_name: '北海道'
    },
    {
        prefecture_jis_code: '02',
        prefecture_name_kana: 'ｱｵﾓﾘｹﾝ',
        prefecture_name: '青森県'
    },
    {
        prefecture_jis_code: '03',
        prefecture_name_kana: 'ｲﾜﾃｹﾝ',
        prefecture_name: '岩手県'
    },
    {
        prefecture_jis_code: '04',
        prefecture_name_kana: 'ﾐﾔｷﾞｹﾝ',
        prefecture_name: '宮城県'
    },
    {
        prefecture_jis_code: '05',
        prefecture_name_kana: 'ｱｷﾀｹﾝ',
        prefecture_name: '秋田県'
    },
    {
        prefecture_jis_code: '06',
        prefecture_name_kana: 'ﾔﾏｶﾞﾀｹﾝ',
        prefecture_name: '山形県'
    },
    {
        prefecture_jis_code: '07',
        prefecture_name_kana: 'ﾌｸｼﾏｹﾝ',
        prefecture_name: '福島県'
    },
    {
        prefecture_jis_code: '08',
        prefecture_name_kana: 'ｲﾊﾞﾗｷｹﾝ',
        prefecture_name: '茨城県'
    },
    {
        prefecture_jis_code: '09',
        prefecture_name_kana: 'ﾄﾁｷﾞｹﾝ',
        prefecture_name: '栃木県'
    },
    {
        prefecture_jis_code: '10',
        prefecture_name_kana: 'ｸﾞﾝﾏｹﾝ',
        prefecture_name: '群馬県'
    },
    {
        prefecture_jis_code: '11',
        prefecture_name_kana: 'ｻｲﾀﾏｹﾝ',
        prefecture_name: '埼玉県'
    },
    {
        prefecture_jis_code: '12',
        prefecture_name_kana: 'ﾁﾊﾞｹﾝ',
        prefecture_name: '千葉県'
    },
    {
        prefecture_jis_code: '13',
        prefecture_name_kana: 'ﾄｳｷｮｳﾄ',
        prefecture_name: '東京都'
    },
    {
        prefecture_jis_code: '14',
        prefecture_name_kana: 'ｶﾅｶﾞﾜｹﾝ',
        prefecture_name: '神奈川県'
    },
    {
        prefecture_jis_code: '15',
        prefecture_name_kana: 'ﾆｲｶﾞﾀｹﾝ',
        prefecture_name: '新潟県'
    },
    {
        prefecture_jis_code: '16',
        prefecture_name_kana: 'ﾄﾔﾏｹﾝ',
        prefecture_name: '富山県'
    },
    {
        prefecture_jis_code: '17',
        prefecture_name_kana: 'ｲｼｶﾜｹﾝ',
        prefecture_name: '石川県'
    },
    {
        prefecture_jis_code: '18',
        prefecture_name_kana: 'ﾌｸｲｹﾝ',
        prefecture_name: '福井県'
    },
    {
        prefecture_jis_code: '19',
        prefecture_name_kana: 'ﾔﾏﾅｼｹﾝ',
        prefecture_name: '山梨県'
    },
    {
        prefecture_jis_code: '20',
        prefecture_name_kana: 'ﾅｶﾞﾉｹﾝ',
        prefecture_name: '長野県'
    },
    {
        prefecture_jis_code: '21',
        prefecture_name_kana: 'ｷﾞﾌｹﾝ',
        prefecture_name: '岐阜県'
    },
    {
        prefecture_jis_code: '22',
        prefecture_name_kana: 'ｼｽﾞｵｶｹﾝ',
        prefecture_name: '静岡県'
    },
    {
        prefecture_jis_code: '23',
        prefecture_name_kana: 'ｱｲﾁｹﾝ',
        prefecture_name: '愛知県'
    },
    {
        prefecture_jis_code: '24',
        prefecture_name_kana: 'ﾐｴｹﾝ',
        prefecture_name: '三重県'
    },
    {
        prefecture_jis_code: '25',
        prefecture_name_kana: 'ｼｶﾞｹﾝ',
        prefecture_name: '滋賀県'
    },
    {
        prefecture_jis_code: '26',
        prefecture_name_kana: 'ｷｮｳﾄﾌ',
        prefecture_name: '京都府'
    },
    {
        prefecture_jis_code: '27',
        prefecture_name_kana: 'ｵｵｻｶﾌ',
        prefecture_name: '大阪府'
    },
    {
        prefecture_jis_code: '28',
        prefecture_name_kana: 'ﾋｮｳｺﾞｹﾝ',
        prefecture_name: '兵庫県'
    },
    {
        prefecture_jis_code: '29',
        prefecture_name_kana: 'ﾅﾗｹﾝ',
        prefecture_name: '奈良県'
    },
    {
        prefecture_jis_code: '30',
        prefecture_name_kana: 'ﾜｶﾔﾏｹﾝ',
        prefecture_name: '和歌山県'
    },
    {
        prefecture_jis_code: '31',
        prefecture_name_kana: 'ﾄｯﾄﾘｹﾝ',
        prefecture_name: '鳥取県'
    },
    {
        prefecture_jis_code: '32',
        prefecture_name_kana: 'ｼﾏﾈｹﾝ',
        prefecture_name: '島根県'
    },
    {
        prefecture_jis_code: '33',
        prefecture_name_kana: 'ｵｶﾔﾏｹﾝ',
        prefecture_name: '岡山県'
    },
    {
        prefecture_jis_code: '34',
        prefecture_name_kana: 'ﾋﾛｼﾏｹﾝ',
        prefecture_name: '広島県'
    },
    {
        prefecture_jis_code: '35',
        prefecture_name_kana: 'ﾔﾏｸﾞﾁｹﾝ',
        prefecture_name: '山口県'
    },
    {
        prefecture_jis_code: '36',
        prefecture_name_kana: 'ﾄｸｼﾏｹﾝ',
        prefecture_name: '徳島県'
    },
    {
        prefecture_jis_code: '37',
        prefecture_name_kana: 'ｶｶﾞﾜｹﾝ',
        prefecture_name: '香川県'
    },
    {
        prefecture_jis_code: '38',
        prefecture_name_kana: 'ｴﾋﾒｹﾝ',
        prefecture_name: '愛媛県'
    },
    {
        prefecture_jis_code: '39',
        prefecture_name_kana: 'ｺｳﾁｹﾝ',
        prefecture_name: '高知県'
    },
    {
        prefecture_jis_code: '40',
        prefecture_name_kana: 'ﾌｸｵｶｹﾝ',
        prefecture_name: '福岡県'
    },
    {
        prefecture_jis_code: '41',
        prefecture_name_kana: 'ｻｶﾞｹﾝ',
        prefecture_name: '佐賀県'
    },
    {
        prefecture_jis_code: '42',
        prefecture_name_kana: 'ﾅｶﾞｻｷｹﾝ',
        prefecture_name: '長崎県'
    },
    {
        prefecture_jis_code: '43',
        prefecture_name_kana: 'ｸﾏﾓﾄｹﾝ',
        prefecture_name: '熊本県'
    },
    {
        prefecture_jis_code: '44',
        prefecture_name_kana: 'ｵｵｲﾀｹﾝ',
        prefecture_name: '大分県'
    },
    {
        prefecture_jis_code: '45',
        prefecture_name_kana: 'ﾐﾔｻﾞｷｹﾝ',
        prefecture_name: '宮崎県'
    },
    {
        prefecture_jis_code: '46',
        prefecture_name_kana: 'ｶｺﾞｼﾏｹﾝ',
        prefecture_name: '鹿児島県'
    },
    {
        prefecture_jis_code: '47',
        prefecture_name_kana: 'ｵｷﾅﾜｹﾝ',
        prefecture_name: '沖縄県'
    }
]
