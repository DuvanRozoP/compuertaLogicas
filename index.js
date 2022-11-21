import DomCompuertaLogica from './index.helpers.js';

const and = new DomCompuertaLogica('.andData1','.andData2','.andDataResult','and1','and2','focoAnd','and');

const or = new DomCompuertaLogica('.orData1','.orData2','.orDataResult','or1','or2','focoOr','or');

const xor = new DomCompuertaLogica('.xorData1','.xorData2','.xorDataResult','xor1','xor2','focoxor','xor');

const not = new DomCompuertaLogica('.notData1',null,'.notDataResult','not1',null,'foconot','not');



and.addEventClick();
or.addEventClick();
xor.addEventClick();
not.addEventClick();

