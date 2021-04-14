import Uporabnik from '@/model/Uporabnik'
import {expect} from 'chai'
//import { shallowMount } from '@vue/test-utils'

describe('Cases', () => {
    let testniPodatki = { ime: 'ime', geslo: 'geslo', uporabniskoIme: 'uporabniskoIme'    }
    let novUporabnik = new Uporabnik(testniPodatki);
    expect (novUporabnik.ime).to.eql(testniPodatki.ime, 'novUporabnik ima ime');
})


