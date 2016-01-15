var string2 = "https://{username}:{password}@gateway.watsonplatform.net/retrieve-and-rank/api/v1/solr_clusters/{solr_cluster_id}/solr/example-collection/select?q=what is the basic mechanism of the transonic aileron buzz&wt=json&fl=id,title";
var string1 = "https://{username}:{password}@gateway.watsonplatform.net/retrieve-and-rank/api/v1/solr_clusters/{solr_cluster_id}/solr/example-collection/fcselect?ranker_id={ranker_id}&q=what is the basic mechanism of the transonic aileron buzz&wt=json&fl=id,title";


var separator = ['/select?','/fcselect?'];


if(string1.indexOf('/select?') >= 0){

	var a = string1.indexOf('/select?');


}else if (string1.indexOf('/fcselect?') >= 0){

	var a = string1.indexOf('/fcselect?');

} 

var index1 = string1.indexOf((new RegExp(('|'),'g')));

var index2 = string2.indexOf((new RegExp(('|'),'g')));

console.log(index1);

console.log(index2);

console.log(a);