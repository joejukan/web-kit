let irregular: Array<{singular: string, plural: string}> = [];
/** @hidden */
export let singularNoun: {[key: string]: string} = {};
/** @hidden */
export let pluralNoun: {[key: string]: string} = {};
/* https://www.thoughtco.com/irregular-plural-nouns-in-english-1692634 */

/**************************** A ****************************/
irregular.push({singular: 'addendum', plural: 'addenda'});
irregular.push({singular: 'aircraft', plural: 'aircraft'});
irregular.push({singular: 'alumna', plural: 'alumnae'});
irregular.push({singular: 'alumnus', plural: 'alumni'});
irregular.push({singular: 'analysis', plural: 'analyses'});
irregular.push({singular: 'antenna', plural: 'antennae'});
irregular.push({singular: 'antithesis', plural: 'antitheses'});
irregular.push({singular: 'apex', plural: 'apices'});
irregular.push({singular: 'appendix', plural: 'appendices'});
irregular.push({singular: 'axis', plural: 'axes'});

/**************************** B ****************************/
irregular.push({singular: 'bacillus', plural: 'bacilli'});
irregular.push({singular: 'bacterium', plural: 'bacteria'});
irregular.push({singular: 'basis', plural: 'bases'});
irregular.push({singular: 'beau', plural: 'beaux '});
irregular.push({singular: 'bison', plural: 'bison'});
irregular.push({singular: 'bureau', plural: 'bureaux'});

/**************************** C ****************************/
irregular.push({singular: 'cactus', plural: 'cacti'});
irregular.push({singular: 'château', plural: 'châteaux'});
irregular.push({singular: 'child', plural: 'children'});
irregular.push({singular: 'codex', plural: 'codices'});
irregular.push({singular: 'concerto', plural: 'concerti'});
irregular.push({singular: 'corpus', plural: 'corpora'});
irregular.push({singular: 'crisis', plural: 'crises'});
irregular.push({singular: 'criterion', plural: 'criteria'});
irregular.push({singular: 'curriculum', plural: 'curricula'});

/**************************** D ****************************/
irregular.push({singular: 'datum', plural: 'data'});
irregular.push({singular: 'deer', plural: 'deer'});
irregular.push({singular: 'diagnosis', plural: 'diagnoses'});
irregular.push({singular: 'die', plural: 'dice'});
irregular.push({singular: 'dwarf', plural: 'dwarves'});

/**************************** E ****************************/
irregular.push({singular: 'ellipsis', plural: 'ellipses'});
irregular.push({singular: 'erratum', plural: 'errata'});

/**************************** F ****************************/
irregular.push({singular: 'fez', plural: 'fezzes'});
irregular.push({singular: 'fish', plural: 'fish'});
irregular.push({singular: 'focus', plural: 'foci'});
irregular.push({singular: 'foot', plural: 'feet'});
irregular.push({singular: 'formula', plural: 'formulae'});
irregular.push({singular: 'fungus', plural: 'fungi'});

/**************************** G ****************************/
irregular.push({singular: 'genus', plural: 'genera'});
irregular.push({singular: 'goose', plural: 'geese'});
irregular.push({singular: 'graffito', plural: 'graffiti'});
irregular.push({singular: 'grouse', plural: 'grouses'});

/**************************** H ****************************/
irregular.push({singular: 'half', plural: 'halves'});
irregular.push({singular: 'hoof', plural: 'hooves'});
irregular.push({singular: 'hypothesis', plural: 'hypotheses'});

/**************************** I ****************************/
irregular.push({singular: 'index', plural: 'indices'});

/**************************** L ****************************/
irregular.push({singular: 'larva', plural: 'larvae'});
irregular.push({singular: 'libretto', plural: 'libretti'});
irregular.push({singular: 'loaf', plural: 'loaves'});
irregular.push({singular: 'locus', plural: 'loci'});
irregular.push({singular: 'louse', plural: 'lice'});

/**************************** M ****************************/
irregular.push({singular: 'man', plural: 'men'});
irregular.push({singular: 'matrix', plural: 'matrices'});
irregular.push({singular: 'medium', plural: 'media'});
irregular.push({singular: 'memorandum', plural: 'memoranda'});
irregular.push({singular: 'minutia', plural: 'minutiae'});
irregular.push({singular: 'moose', plural: 'moose'});
irregular.push({singular: 'mouse', plural: 'mice'});

/**************************** N ****************************/
irregular.push({singular: 'nebula', plural: 'nebulae'});
irregular.push({singular: 'nucleus', plural: 'nuclei'});

/**************************** O ****************************/
irregular.push({singular: 'oasis', plural: 'oases'});
irregular.push({singular: 'offspring', plural: 'offspring'});
irregular.push({singular: 'opus', plural: 'opera'});
irregular.push({singular: 'ovum', plural: 'ova'});
irregular.push({singular: 'ox', plural: 'oxen'});

/**************************** P ****************************/
irregular.push({singular: 'parenthesis', plural: 'parentheses'});
irregular.push({singular: 'phenomenon', plural: 'phenomena'});
irregular.push({singular: 'phylum', plural: 'phyla'});
irregular.push({singular: 'prognosis', plural: 'prognoses'});

/**************************** Q ****************************/
irregular.push({singular: 'quiz', plural: 'quizzes'});

/**************************** R ****************************/
irregular.push({singular: 'radius', plural: 'radii'});
irregular.push({singular: 'referendum', plural: 'referenda'});

/**************************** S ****************************/
irregular.push({singular: 'salmon', plural: 'salmon'});
irregular.push({singular: 'scarf', plural: 'scarves'});
irregular.push({singular: 'self', plural: 'selves'});
irregular.push({singular: 'series', plural: 'series'});
irregular.push({singular: 'sheep', plural: 'sheep'});
irregular.push({singular: 'shrimp', plural: 'shrimp'});
irregular.push({singular: 'species', plural: 'species'});
irregular.push({singular: 'stimulus', plural: 'stimuli'});
irregular.push({singular: 'stratum', plural: 'strata'});
irregular.push({singular: 'swine', plural: 'swine'});
irregular.push({singular: 'syllabus', plural: 'syllabi'});
irregular.push({singular: 'symposium', plural: 'symposia'});
irregular.push({singular: 'synopsis', plural: 'synopses'});

/**************************** T ****************************/
irregular.push({singular: 'tableau', plural: 'tableaux'});
irregular.push({singular: 'thesis', plural: 'theses'});
irregular.push({singular: 'thief', plural: 'thieves'});
irregular.push({singular: 'tooth', plural: 'teeth'});
irregular.push({singular: 'trout', plural: 'trout'});
irregular.push({singular: 'tuna', plural: 'tuna'});

/**************************** V ****************************/
irregular.push({singular: 'vertebra', plural: 'vertebrae'});
irregular.push({singular: 'vertex', plural: 'vertices'});
irregular.push({singular: 'vita', plural: 'vitae'});
irregular.push({singular: 'vortex', plural: 'vortices'});

/**************************** W ****************************/
irregular.push({singular: 'wharf', plural: 'wharves'});
irregular.push({singular: 'wife', plural: 'wives'});
irregular.push({singular: 'wolf', plural: 'wolves'});
irregular.push({singular: 'woman', plural: 'women'});

irregular.forEach((noun) => {
    pluralNoun[noun.singular] = noun.plural;
    singularNoun[noun.plural] = noun.singular;
});