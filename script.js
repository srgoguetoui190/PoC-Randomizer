// Base de datos de ejemplo
const champions = [
    { name: "Aatrox", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/AATROX_MINIATURA.webp" },
    { name: "Ahri", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/AHRI_MINIATURA.webp" },
    { name: "Ahri Flor Espiritual", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/AHRI_FLOR_ESPIRITUAL_MINIATURA.webp" },
    { name: "Akshan", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/AKSHAN_MINIATURA.webp" },
    { name: "Ambessa", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/AMBESSA_MINIATURA.webp" },
    { name: "Anivia", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/ANIVIA_MINIATURA.webp" },
    { name: "Annie", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/ANNIE_MINIATURA.webp" },
    { name: "Ashe", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/ASHE_MINIATURA.webp" },
    { name: "Aurelion Sol", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/AURELION_SOL_MINIATURA.webp" },
    { name: "Azir", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/AZIR_MINIATURA.webp" },
    { name: "Bardo", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/BARDO_MINIATURA.webp" },
    { name: "Caitlyn", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/CAITLYN_MINIATURA.webp" },
    { name: "Darius", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/DARIUS_MINIATURA.webp" },
    { name: "Diana", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/DIANA_MINIATURA.webp" },
    { name: "Dragon Ancestral", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/DRAGON_ANCESTRAL_MINIATURA.webp" },
    { name: "Ekko", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/EKKO_MINIATURA.webp" },
    { name: "El Rey Poro", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/EL_REY_PORO_MINIATURA.webp" },
    { name: "Elise", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/ELISE_MINIATURA.webp" },
    { name: "Evelynn", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/EVELYNN_MINIATURA.webp" },
    { name: "Evelynn Flor Espiritual", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/EVELYNN_FLOR_ESPIRITUAL_MINIATURA.webp" },
    { name: "Fiddlesticks", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/FIDDLESTICKS_MINIATURA.webp" },
    { name: "Garen", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/GAREN_MINIATURA.webp" },
    { name: "Gnar", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/GNAR_MINIATURA.webp" },
    { name: "Gwen", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/GWEN_MINIATURA.webp" },
    { name: "Hecarim", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/HECARIM_MINIATURA.webp" },
    { name: "Heimerdinger", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/HEIMERDINGER_MINIATURA.webp" },
    { name: "Illaoi", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/ILLAOI_MINIATURA.webp" },
    { name: "Jack", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/JACK_MINIATURA.webp" },
    { name: "Janna", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/JANNA_MINIATURA.webp" },
    { name: "Jax", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/JAX_MINIATURA.webp" },
    { name: "Jayce", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/JAYCE_MINIATURA.webp" },
    { name: "Jhin", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/JHIN_MINIATURA.webp" },
    { name: "Jinx", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/JINX_MINIATURA.webp" },
    { name: "Kai'sa", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/KAISA_MINIATURA.webp" },
    { name: "Kayle", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/KAYLE_MINIATURA.webp" },
    { name: "Kayn", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/KAYN_MINIATURA.webp" },
    { name: "Kindred", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/KINDRED_MINIATURA.webp" },
    { name: "La Arrebatadora", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/LA_ARREBATADORA_MINIATURA.webp" },
    { name: "Leblanc", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/LEBLANC_MINIATURA.webp" },
    { name: "Lee Sin", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/LEE_SIN_MINIATURA.webp" },
    { name: "Leona", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/LEONA_MINIATURA.webp" },
    { name: "Lillia", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/LILLIA_MINIATURA.webp" },
    { name: "Lux", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/LUX_MINIATURA.webp" },
    { name: "Lux Iluminada", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/LUX_ILUMINADA_MINIATURA.webp" },
    { name: "Maestro Yi", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/MAESTRO_YI_MINIATURA.webp" },
    { name: "Maestro Yi Flor Espiritual", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/MAESTRO_YI_FLOR_ESPIRITUAL_MINIATURA.webp" },
    { name: "Mel", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/MEL_MINIATURA.webp" },
    { name: "Miss Fortune", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/MISS_FORTUNE_MINIATURA.webp" },
    { name: "Mordekaiser", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/MORDEKAISER_MINIATURA.webp" },
    { name: "Morgana", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/MORGANA_MINIATURA.webp" },
    { name: "Nami", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NAMI_MINIATURA.webp" },
    { name: "Nasus", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NASUS_MINIATURA.webp" },
    { name: "Nautilus", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NAUTILUS_MINIATURA.webp" },
    { name: "Neeko", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NEEKO_MINIATURA.webp" },
    { name: "Nidalee", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NIDALEE_MINIATURA.webp" },
    { name: "Nilah", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NILAH_MINIATURA.webp" },
    { name: "Norra", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NORRA_MINIATURA.webp" },
    { name: "Nunu y Willump", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/NUNU_Y_WILLUMP_MINIATURA.webp" },
    { name: "Ornn", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/ORNN_MINIATURA.webp" },
    { name: "Pyke", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/PYKE_MINIATURA.webp" },
    { name: "Samira", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/SAMIRA_MINIATURA.webp" },
    { name: "Sett", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/SETT_MINIATURA.webp" },
    { name: "Shyvana", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/SHYVANA_MINIATURA.webp" },
    { name: "Soraka", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/SORAKA_MINIATURA.webp" },
    { name: "Swain", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/SWAIN_MINIATURA.webp" },
    { name: "Taliyah", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/TALIYAH_MINIATURA.webp" },
    { name: "Teemo", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/TEEMO_MINIATURA.webp" },
    { name: "Teemo Flor Espiritual", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/TEEMO_FLOR_ESPIRITUAL_MINIATURA.webp" },
    { name: "Tahm Kench", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/TAHM_KENCH_MINIATURA.webp" },
    { name: "Thresh", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/THRESH_MINIATURA.webp" },
    { name: "Tryndamere", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/TRYNDAMERE_MINIATURA.webp" },
    { name: "Twisted Fate", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/TWISTED_FATE_MINIATURA.webp" },
    { name: "Udyr", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/UDYR_MINIATURA.webp" },
    { name: "Varus", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VARUS_MINIATURA.webp" },
    { name: "Vayne", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VAYNE_MINIATURA.webp" },
    { name: "Veigar", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VEIGAR_MINIATURA.webp" },
    { name: "Vex", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VEX_MINIATURA.webp" },
    { name: "Vi", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VI_MINIATURA.webp" },
    { name: "Viego", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VIEGO_MINIATURA.webp" },
    { name: "Viktor", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VIKTOR_MINIATURA.webp" },
    { name: "Volibear", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/VOLIBEAR_MINIATURA.webp" },
    { name: "Warwick", stars: "3stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/WARWICK_MINIATURA.webp" },
    { name: "Yasuo", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/YASUO_MINIATURA.webp" },
    { name: "Yasuo Flor Espiritual", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/YASUO_FLOR_ESPIRITUAL_MINIATURA.webp" },
    { name: "Yuumi", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/YUUMI_MINIATURA.webp" },
    { name: "Zoe", stars: "6stars", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/MINIATURA/ZOE_MINIATURA.webp" }
];
const relics = [
    // ==========================================
    // RELIQUIAS COMUNES
    // ==========================================
    { name: "Armadura de Warmog", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Armadura_de_Warmog.webp" },
    { name: "Bastón de la Hija de las Estrellas", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Bastón_de_la_Hija_de_las_Estrellas.webp" },
    { name: "Capítulo Perdido", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Capítulo_Perdido.webp" },
    { name: "Coraza de Armadurillo", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Coraza_de_Armadurillo.webp" },
    { name: "El Aplastador del Rey Troll", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Aplastador_del_Rey_Trol.webp" },
    { name: "El Collar del Camaleón", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Collar_del_Camaleón.webp" },
    { name: "Espadafuria de Guinsoo", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espadafuria_de_Guinsoo.webp" },
    { name: "Filo de la Tormenta", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Filo_de_la_Tormenta.webp" },
    { name: "Hidra Voraz", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Hidra_Voraz.webp" },
    { name: "La Hoja de la Gran Duelista", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Hoja_de_la_Gran_Duelista.webp" },
    { name: "Lanza Álmica", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Lanza_Álmica.webp" },
    { name: "Mangual de Hielo Puro", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Mangual_de_Hielo_Puro.webp" },
    { name: "Misión de Sabiduría", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Misi%C3%B3n_de_sabidur%C3%ADa.webp" },
    { name: "Permahielo", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Permahielo.webp" },
    { name: "Prototipo de Pulsar-Z", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Prototipo_de_Pulsar-Z.webp" },
    { name: "Sueños de Yordles", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Sueños_de_Yordles.webp" },
    { name: "Velo de la Banshee", rarity: "comun", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Velo_de_la_Banshee.webp" },

    // ==========================================
    // RELIQUIAS RARAS
    // ==========================================
    { name: "Ángel Guardián", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Ángel_Guardián.webp" },
    { name: "Báculo del Arcángel", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Báculo_del_Arcángel.webp" },
    { name: "Baratija del Guardián", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Baratija_del_Guardián.webp" },
    { name: "Batería Revoltosa", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Batería_Revoltosa.webp" },
    { name: "Cañón de Proa del Heraldo de la Muerte", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Cañón_de_Proa_del_Heraldo_de_la_Muerte.webp" },
    { name: "Caos Improvisado", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Caos_Improvisado.webp" },
    { name: "Caparazón del Vacío", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Caparazón_del_Vacío.webp" },
    { name: "Cometa Arcano", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Cometa_Arcano.webp" },
    { name: "Condensador", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Condensador.webp" },
    { name: "Corazón de Oro", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Corazón_de_Oro.webp" },
    { name: "Cosecha Malvada", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Cosecha_Malvada.webp" },
    { name: "Desesperación Absoluta", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Desesperación_Absoluta.webp" },
    { name: "Duplicador Quimtech", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Duplicador_Quimtech.webp" },
    { name: "El Coleccionista", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Coleccionista.webp" },
    { name: "El Equilibrador", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Equilibrador.webp" },
    { name: "El Escondite del Azote", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Escondite_del_Azote.webp" },
    { name: "El Gambito del Amo de las Cartas", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Gambito_del_Amo_de_las_Cartas.webp" },
    { name: "El Plan de Contingencia del Gran General", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Plan_de_Contingencia_del_Gran_General.webp" },
    { name: "El Renombre de la Cazarrecompensas", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Renombre_de_la_Cazarrecompensas.webp" },
    { name: "El Rompepuertas del Curador", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Rompepuertas_del_Curador.webp" },
    { name: "Emblema de la Maquiavélica", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Emblema_de_la_Maquiavélica.webp" },
    { name: "Espada de la Tempestad", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espada_de_la_Tempestad.webp" },
    { name: "Espada del Acechador", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espada_del_Acechador.webp" },
    { name: "Espátula Dorada", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espátula_Dorada.webp" },
    { name: "Fragmento de Estrella Corrompido", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Fragmento_de_Estrella_Corrompido.webp" },
    { name: "Fuerza del Viento", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Fuerza_del_Viento.webp" },
    { name: "Gema Estelar", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Gema_Estelar.webp" },
    { name: "Herencia de la Guardia de la Corona", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Herencia_Guardia_de_la_Corona.webp" },
    { name: "Himno del Valor", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Himno_del_Valor.webp" },
    { name: "Hojasombra de Valleclaro", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Hojasombra_de_Valleclaro.webp" },
    { name: "La Carga de la Bala Perdida", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Carga_de_la_Bala_Perdida.webp" },
    { name: "La Corona del Rey Troll", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Corona_del_Rey_Trol.webp" },
    { name: "La Hebilla del Berserker", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Hebilla_del_Berserker.webp" },
    { name: "La Mano del Destino", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Mano_del_Destino.webp" },
    { name: "La Pala del Enterrador", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Pala_del_Enterrador.webp" },
    { name: "Linterna de Wriggle", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Linterna_de_Wriggle.webp" },
    { name: "Marca de Sangre", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Marca_de_Sangre.webp" },
    { name: "Marca del Súcubo", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Marca_del_Súcubo.webp" },
    { name: "Martillo de Guerra de Caulfield", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Martillo_de_Guerra_de_Caulfield.webp" },
    { name: "Orbe del Guardián", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Orbe_del_Guardián.webp" },
    { name: "Orbe Luminoso", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Orbe_Luminoso.webp" },
    { name: "Potencia Arrolladora", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Potencia_Arrolladora.webp" },
    { name: "Puño de Jaurim", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Puño_de_Jaurim.webp" },
    { name: "Revestimiento de Torreta", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Revestimiento_de_Torreta.webp" },
    { name: "Sujetaespadas Laurent", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Sujetaespadas_Laurent.webp" },
    { name: "Tempestad de Luden", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Tempestad_de_Luden.webp" },
    { name: "Transmodulador", rarity: "rara", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Transmodulador.webp" },

    // ==========================================
    // RELIQUIAS ÉPICAS
    // ==========================================
    { name: "Abrazo de la Reina", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Abrazo_de_la_Reina.webp" },
    { name: "Acelerador de Portales de Norra", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Acelerador_de_Portales_de_Norra.webp" },
    { name: "Aliento Helado", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Aliento_Helado.webp" },
    { name: "Amiguis del Portal", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Amiguis_del_Portal.webp" },
    { name: "Aprendiz de las Sombras", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Aprendiz_de_las_Sombras.webp" },
    { name: "Arma Viviente", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Arma_Viviente.webp" },
    { name: "Armotas", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Armotas.webp" },
    { name: "Arpón Mortífero", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Arpón_Mortífero.webp" },
    { name: "Báculo Celestial", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Báculo_Celestial.webp" },
    { name: "Bastón Incandescente de Lux", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Bastón_Incandescente_de_Lux.webp" },
    { name: "Batería Hextech de Jayce", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Batería_Hextech_de_Jayce.webp" },
    { name: "Cachorrito Espacial!!!", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Cachorrito_Espacial.webp" },
    { name: "Casco del Señor de la Guerra", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/casco_del_se%C3%B1or_de_la_guerra.webp" },
    { name: "Cazador de Rufianes", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Cazador_de_Rufianes.webp" },
    { name: "Cese y Desista", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Cese_y_Desista.webp" },
    { name: "Conmoción y Pavor", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Conmoción_y_Pavor.webp" },
    { name: "Cuchilla Giratoria", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Cuchilla_Giratoria.webp" },
    { name: "Dados Trucados", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Dados_Trucados.webp" },
    { name: "Derrota de la Muerte", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Derrota_de_la_Muerte.webp" },
    { name: "Dragartos Gemelos", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Dragartos_Gemelos.webp" },
    { name: "Dura Lección", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Dura_Lección.webp" },
    { name: "Ejército de Cuervos de Swain", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Ejército_de_Cuervos_de_Swain.webp" },
    { name: "El Arco de la Arrebatadora", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Arco_de_la_Arrebatadora.webp" },
    { name: "El Precio de la Retribución", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/El_Precio_de_la_Retribución.webp" },
    { name: "Elegido por las Estrellas", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Elegido_por_las_Estrellas.webp" },
    { name: "Escudo del Amanecer", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Escudo_del_amanecer.webp" },
    { name: "Escudo Negro", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Escudo_negro.webp" },
    { name: "Espada de Viento de Yasuo", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espada_de_viento_de_Yasuo.webp" },
    { name: "Espada Venerable", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espada_Venerable.webp" },
    { name: "Espadafuego Celeste", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espadafuego_celeste.webp" },
    { name: "Espantapájaros Indefensivo", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espantap%C3%A1jaros_Inofensivo.webp" },
    { name: "Espíritu de los Buhru", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espíritu_de_los_Buhru.webp" },
    { name: "Espíritu Resonante", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espíritu_Resonante.webp" },
    { name: "Espíritus Asistentes", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Espíritus_Asistentes.webp" },
    { name: "Experimentos Crueles", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Experimentos_Crueles.webp" },
    { name: "Flauta de Alborotador", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Flauta_de_Alborotador.webp" },
    { name: "Fortuna Encontrada", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Fortuna_Encontrada.webp" },
    { name: "Fuerza Pétrea", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Fuerza_Pétrea.webp" },
    { name: "Fulgor Ardiente", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Fulgor_Ardiente.webp" },
    { name: "Garras Grandes", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/garras_grandes.webp" },
    { name: "Gasto de Defensa", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Gasto_de_Defensa.webp" },
    { name: "Guante Espiritual", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Guante_Espiritual.webp" },
    { name: "Guantelete de Vendaval", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Guantelete_de_Vendaval.webp" },
    { name: "Guanteletes Estelares", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Guanteletes_Estelares.webp" },
    { name: "Guía de Avistamiento de Yetis", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Gu%C3%ADa_de_avistamiento_de_yetis.webp" },
    { name: "Guía de Hecarim", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Guja_de_Hecarim.webp" },
    { name: "Hacha Cortamiedos", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Hacha_Cortamiedos.webp" },
    { name: "Ícono de Valhir", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Ícono_de_Valhir.webp" },
    { name: "Juramento de los Guardianes", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Juramento_de_los_Guardianes.webp" },
    { name: "La Balanza de la Justicia", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/la_balanza_de_la_justicia.webp" },
    { name: "La Bestia Interior", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Bestia_Interior.webp" },
    { name: "La Espada Darkin", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Espada_Darkin.webp" },
    { name: "La Mano de Noxus", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_mano_de_Noxus.webp" },
    { name: "La Voluntad de Demacia", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/La_Voluntad_de_Demacia.webp" },
    { name: "Ladrona de Esencias", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Ladrona_de_Esencias.webp" },
    { name: "Lamento Drenado", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Lamento_Drenado.webp" },
    { name: "Linterna de Almas", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Linterna_de_Almas.webp" },
    { name: "Llamado de Sirena", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Llamado_de_Sirena.webp" },
    { name: "Mazo Acumulado", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Mazo_Acumulado.webp" },
    { name: "Mazo del Destino", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Mazo_del_Destino.webp" },
    { name: "Monedero de Campeón", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Monedero_de_Campeón.webp" },
    { name: "Mordiscos Reales", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Mordiscos_Reales.webp" },
    { name: "Murmullo", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Murmullo.webp" },
    { name: "Núcleo Hex Perfecto", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/N%C3%BAcleo_hex_perfecto.webp" },
    { name: "Orden de Exploración", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Orden_de_Exploración.webp" },
    { name: "Osito de Apoyo Emocional", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Osito_de_Apoyo_Emocional.webp" },
    { name: "Paquete Completo", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Paquete_completo.webp" },
    { name: "Placa del Centinela", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Placa_del_Centinela.webp" },
    { name: "Poder Renovador", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Poder_Renovador.webp" },
    { name: "Pólvora Cargada", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Pólvora_Cargada.webp" },
    { name: "Protectores de Demacia", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Protectores_de_demacia.webp" },
    { name: "Relicario Enervante", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Relicario_Enervante.webp" },
    { name: "Rifle Hextech", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Rifle_Hextech.webp" },
    { name: "Ritmos de Desesperanza", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Ritmos_de_Desesperanza.webp" },
    { name: "Runas Dracónicas", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Runas_Dracónicas.webp" },
    { name: "Sinfonía de la Tejehechizos", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Sinfonía_de_la_Tejehechizos.webp" },
    { name: "Técnica Secreta", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Técnica_Secreta.webp" },
    { name: "Tesoros de las Profundidades", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/tesoro_de_las_profundidades.webp" },
    { name: "Tijeras Espectrales", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Tijeras_Espectrales.webp" },
    { name: "Tomos Ocultos", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Tomos_Ocultos.webp" },
    { name: "Tumba Congelada", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Tumba_Congelada.webp" },
    { name: "Vara Imperial de Azir", rarity: "epica", img: "https://cdn.jsdelivr.net/gh/SirDiegoADM/LOR_IMAGENES@main/RELIQUIAS/Vara_Imperial_de_Azir.webp" }
];
const adventures = [
    // ==========================================
    // AVENTURAS NORMALES
    // ==========================================
    { name: "El Explorador Veloz", type: "normal", stars: "0★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01PZ008T2-full.png/200px-01PZ008T2-full.png?a20a9" },
    { name: "El Poder de Demacia", type: "normal", stars: "1★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01DE012-hd-full.jpg/200px-01DE012-hd-full.jpg?0d58c" },
    { name: "El Hada Hechicera", type: "normal", stars: "1★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/03IO002-full.png/200px-03IO002-full.png?3f0cc" },
    { name: "La Ira de Zaun", type: "normal", stars: "1★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98PZ001-full.png/200px-98PZ001-full.png?4d749" },
    { name: "El Azote de los Mares", type: "normal", stars: "1.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/02BW032-full.png/200px-02BW032-full.png?441cb" },
    { name: "El Explorador Pródigo", type: "normal", stars: "1.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01PZ036T1-full.png/200px-01PZ036T1-full.png?9e0cd" },
    { name: "La Cazarrecompensas", type: "normal", stars: "0.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/02BW022T2-full.png/200px-02BW022T2-full.png?a5939" },
    { name: "El Maestro de las Sombras", type: "normal", stars: "2★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01IO009-hd-full.jpg/200px-01IO009-hd-full.jpg?07e01" },
    { name: "El Titán de las Profundidades", type: "normal", stars: "2★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/02BW053-hd-full.jpg/200px-02BW053-hd-full.jpg?e0ff8" },
    { name: "La Mano de Noxus", type: "normal", stars: "2★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01NX038T2-full.png/200px-01NX038T2-full.png?c90f3" },
    { name: "El Heraldo Mecánico", type: "normal", stars: "2.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/03PZ003-full.png/200px-03PZ003-full.png?236d9" },
    { name: "El Glorioso Ejecutor", type: "normal", stars: "2.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01NX020-full.png/200px-01NX020-full.png?12da5" },
    { name: "Flores y Hongos", type: "normal", stars: "2.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98SB031-full.png/200px-98SB031-full.png?777e4" },
    { name: "La Hija del Vacío", type: "normal", stars: "3★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/06SH009-full.png/200px-06SH009-full.png?37831" },
    { name: "El Coleccionista de Almas", type: "normal", stars: "3★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01SI052-hd-full.jpg/200px-01SI052-hd-full.jpg?89683" },
    { name: "El Señor de los Dragones", type: "normal", stars: "3★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/08RU014T9-full.png/200px-08RU014T9-full.png?2154b" },
    { name: "La Voz Profunda Bajo las Olas", type: "normal", stars: "3★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/06BW011-full.png/200px-06BW011-full.png?91b8c" },
    { name: "El Coloso", type: "normal", stars: "3.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/05DE009-full.png/200px-05DE009-full.png?7141a" },
    { name: "El Miedo Ancestral", type: "normal", stars: "3.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98RU004-full.png/200px-98RU004-full.png?8efdd" },
    { name: "El Gran Robo", type: "normal", stars: "3.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98SH002-full.png/200px-98SH002-full.png?dc598" },
    { name: "El Forjador de Estrellas", type: "normal", stars: "4★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/03MT087-full.png/200px-03MT087-full.png?1d109" },
    { name: "El Imperdonable", type: "normal", stars: "4.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01IO015T1-full.png/200px-01IO015T1-full.png?f0f35" },
    { name: "La Bruja de Hielo", type: "normal", stars: "5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/04FR005-full.png/200px-04FR005-full.png?e7348" },
    { name: "El Gran General Noxiano", type: "normal", stars: "5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/02NX007T2-full.png/200px-02NX007T2-full.png?9fc3d" },

    // ==========================================
    // AVENTURAS DE PESADILLA
    // ==========================================
    { name: "El Bromista de las Mareas", type: "nightmare", stars: "4.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/02BW046-full.png/200px-02BW046-full.png?16a03" },
    { name: "El Rey Arruinado", type: "nightmare", stars: "5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/04SI055T2-full.png/200px-04SI055T2-full.png?d201b" },
    { name: "La Voz Profunda Bajo las Olas", type: "nightmare", stars: "6★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/06BW011-full.png/200px-06BW011-full.png?91b8c" },
    { name: "El Miedo Ancestral", type: "nightmare", stars: "6.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98RU004-full.png/200px-98RU004-full.png?8efdd" },
    { name: "Con Amigos Como Estos...", type: "nightmare", stars: "10★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/03MT009-full.png/200px-03MT009-full.png?3b7d7" },

    // ==========================================
    // AVENTURAS DE LOS TITANES
    // ==========================================
    { name: "El Jefe", type: "titan", stars: "2★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/07IO011-full.png/200px-07IO011-full.png?f6e8d" },
    { name: "El Renacido de Hierro", type: "titan", stars: "3★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/08SI042-full.png/200px-08SI042-full.png?73de0" },
    { name: "El Titán de las Profundidades", type: "titan", stars: "4★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/02BW053T1-full.png/200px-02BW053T1-full.png?e0ab2" },
    { name: "La Tormenta Implacable", type: "titan", stars: "5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/08FR001T1-full.png/200px-08FR001T1-full.png?7cfd5" },
    { name: "El Señor de los Dragones", type: "titan", stars: "6★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/08RU014T9-full.png/200px-08RU014T9-full.png?2154b" },

    // ==========================================
    // FLOR ESPIRITUAL
    // ==========================================
    { name: "El Espíritu de la Venganza", type: "spirit_blossom", stars: "2★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01SI030-full.png/200px-01SI030-full.png?00152" },
    { name: "La Invocadora de Mareas", type: "spirit_blossom", stars: "3★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/05BW005-full.png/200px-05BW005-full.png?df4ae" },
    { name: "La Cantante Soñadora", type: "spirit_blossom", stars: "4★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/06PZ021-full.png/200px-06PZ021-full.png?34be3" },
    { name: "El Ejemplo de Demacia", type: "spirit_blossom", stars: "5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/04DE008-full.png/200px-04DE008-full.png?cf3b4" },
    { name: "Flores y Hongos", type: "spirit_blossom", stars: "6★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98SB031T2-full.png/200px-98SB031T2-full.png?74f1a" },

    // ==========================================
    // FORAJIDOS DE RUNATERRA
    // ==========================================
    { name: "La Rosa del Desierto", type: "highnoon", stars: "2.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/07NX007-full.png/200px-07NX007-full.png?95d9c" },
    { name: "El Desdén de la Luna", type: "highnoon", stars: "3.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/03MT056-full.png/200px-03MT056-full.png?12a51" },
    { name: "La Espada Wuju", type: "highnoon", stars: "4.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/06IO008T1-full.png/200px-06IO008T1-full.png?03296" },
    { name: "El Maestro de las Cartas", type: "highnoon", stars: "5.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/02BW026T3-full.png/200px-02BW026T3-full.png?86695" },
    { name: "El Gran Robo", type: "highnoon", stars: "6.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98SH002-full.png/200px-98SH002-full.png?dc598" },

    // ==========================================
    // ARCANE
    // ==========================================
    { name: "La Sacerdotisa del Kraken", type: "arcane", stars: "1.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/06BW006-full.png/200px-06BW006-full.png?079a2" },
    { name: "El Emperador de las Arenas", type: "arcane", stars: "2.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/04SH003-full.png/200px-04SH003-full.png?06f14" },
    { name: "El Poder de Demacia", type: "arcane", stars: "3.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01DE012T1-full.png/200px-01DE012T1-full.png?1355e" },
    { name: "La Ira de Zaun", type: "arcane", stars: "4.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/98PZ001T2-full.png/200px-98PZ001T2-full.png?0e385" },
    { name: "La Iluminada", type: "arcane", stars: "5.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/01IO041T1-full.png/200px-01IO041T1-full.png?f8ff3" },
    { name: "El Forjador de Estrellas", type: "arcane", stars: "6.5★", img: "https://wiki.leagueoflegends.com/en-us/images/thumb/03MT087T1-full.png/200px-03MT087T1-full.png?5952c" }
];
// Alternar entre temas: Islas de la Sombra -> Flor Espiritual -> Tema Claro
function toggleTheme() {
    const body = document.body;

    if (body.classList.contains("shadow-isles-theme")) {
        body.classList.remove("shadow-isles-theme");
        body.classList.add("spirit-blossom-theme");
    } else if (body.classList.contains("spirit-blossom-theme")) {
        body.classList.remove("spirit-blossom-theme");
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("shadow-isles-theme");
    }
}

// Botones para marcar/desmarcar todos los tipos de aventura
function selectAllAdventures(status) {
    const checkboxes = document.querySelectorAll('input[name="adventureType"]');
    checkboxes.forEach(cb => cb.checked = status);
}

// Reroll de Aventura filtrando por tipos (checkboxes) y estrellas (select)
function rerollAdventure() {
    const selectedTypes = Array.from(document.querySelectorAll('input[name="adventureType"]:checked'))
                               .map(cb => cb.value);

    const starFilterElem = document.getElementById("adventureStarFilter");
    const starFilter = starFilterElem ? starFilterElem.value : "all";

    let pool = adventures.filter(a => {
        const matchesType = selectedTypes.includes(a.type);
        const matchesStars = (starFilter === "all") || (a.stars === starFilter);
        return matchesType && matchesStars;
    });

    if (!pool || pool.length === 0) pool = adventures;

    const adv = pool[Math.floor(Math.random() * pool.length)];
    const img = document.getElementById("adventureImage");

    if (img && adv) {
        img.classList.remove("card-updating");
        void img.offsetWidth;

        document.getElementById("adventureName").innerText = adv.name;
        
        const starsElem = document.getElementById("adventureStars");
        if (starsElem) starsElem.innerText = adv.stars || "";

        img.src = (adv.img && adv.img.trim() !== "") ? adv.img : "https://wiki.leagueoflegends.com/en-us/images/thumb/01PZ008T2-full.png/200px-01PZ008T2-full.png";
        img.style.display = "block";

        img.classList.add("card-updating");
        img.style.cursor = "pointer";
        img.onclick = rerollAdventure;
    }
}

// Ocultar / Mostrar panel de filtros
function toggleFilters() {
    const container = document.getElementById("filtersContainer");
    const btn = document.getElementById("toggleFiltersButton");
    if (container) {
        if (container.style.display === "none") {
            container.style.display = "flex";
            if (btn) btn.innerText = "OCULTAR FILTROS";
        } else {
            container.style.display = "none";
            if (btn) btn.innerText = "MOSTRAR FILTROS";
        }
    }
}

function triggerSlashAnimation(element) {
    element.classList.remove("card-slash", "card-updating");
    void element.offsetWidth;
    element.classList.add("card-slash");
}

function selectRandom() {
    rerollChampion();
    rerollRelics();
    rerollAdventure();
}

function rerollChampion() {
    const selectedInput = document.querySelector('input[name="championFilter"]:checked');
    const filter = selectedInput ? selectedInput.value : "all";

    let pool = champions;
    if (filter !== "all") {
        pool = champions.filter(c => String(c.stars) === String(filter));
    }
    
    if (!pool || pool.length === 0) pool = champions;

    const champ = pool[Math.floor(Math.random() * pool.length)];
    const img = document.getElementById("championImage");

    if (img) {
        img.classList.remove("card-updating");
        void img.offsetWidth;

        document.getElementById("championName").innerText = champ.name;
        img.src = champ.img;
        img.style.display = "block";
        img.classList.add("card-updating");

        img.style.cursor = "pointer";
        img.onclick = rerollChampion;
    }
}

function rerollRelics() {
    const commonCheck = document.getElementById("commonRelics");
    const rareCheck = document.getElementById("rareRelics");
    const epicCheck = document.getElementById("epicRelics");
    const dupCheck = document.getElementById("allowDuplicates");

    const useCommon = commonCheck ? commonCheck.checked : true;
    const useRare = rareCheck ? rareCheck.checked : true;
    const useEpic = epicCheck ? epicCheck.checked : true;
    const allowDuplicates = dupCheck ? dupCheck.checked : false;

    let pool = relics.filter(r => 
        (r.rarity === "comun" && useCommon) ||
        (r.rarity === "rara" && useRare) ||
        (r.rarity === "epica" && useEpic)
    );

    if (pool.length === 0) pool = [...relics];

    const container = document.getElementById("relicImages");
    if (!container) return;
    container.innerHTML = "";

    let availablePool = [...pool];
    let selected = [];

    for (let i = 0; i < 3; i++) {
        if (availablePool.length === 0) break;
        let randomIndex = Math.floor(Math.random() * availablePool.length);
        let item = availablePool[randomIndex];
        selected.push(item);

        if (!allowDuplicates) {
            availablePool.splice(randomIndex, 1);
        }
    }

    selected.forEach(relic => {
        const div = document.createElement("div");
        div.className = "relic-item card-updating";
        div.style.cursor = "pointer";
        div.innerHTML = `<img src="${relic.img}" alt="${relic.name}"> <span>${relic.name}</span>`;

        div.addEventListener("click", () => replaceSingleRelic(div));

        container.appendChild(div);
    });
}

function replaceSingleRelic(targetDiv) {
    const commonCheck = document.getElementById("commonRelics");
    const rareCheck = document.getElementById("rareRelics");
    const epicCheck = document.getElementById("epicRelics");
    const dupCheck = document.getElementById("allowDuplicates");

    const useCommon = commonCheck ? commonCheck.checked : true;
    const useRare = rareCheck ? rareCheck.checked : true;
    const useEpic = epicCheck ? epicCheck.checked : true;
    const allowDuplicates = dupCheck ? dupCheck.checked : false;

    let pool = relics.filter(r => 
        (r.rarity === "comun" && useCommon) ||
        (r.rarity === "rara" && useRare) ||
        (r.rarity === "epica" && useEpic)
    );

    if (!pool || pool.length === 0) pool = [...relics];

    if (!allowDuplicates) {
        const currentlyDisplayed = Array.from(document.querySelectorAll("#relicImages .relic-item span"))
                                        .map(span => span.textContent.trim());
        
        const filteredPool = pool.filter(r => !currentlyDisplayed.includes(r.name));
        
        if (filteredPool.length > 0) {
            pool = filteredPool;
        }
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const newRelic = pool[randomIndex];

    if (newRelic) {
        targetDiv.innerHTML = `<img src="${newRelic.img}" alt="${newRelic.name}"> <span>${newRelic.name}</span>`;
        triggerSlashAnimation(targetDiv);
    }
}

function preloadAllImages() {
    const allUrls = [
        ...champions.map(c => c.img),
        ...relics.map(r => r.img),
        ...adventures.map(a => a.img)
    ];

    allUrls.forEach(url => {
        if (url) {
            const img = new Image();
            img.src = url;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    preloadAllImages();
});
