let champName = document.getElementById('champpage').innerHTML
console.log(champName)

fetch("./../../../data_dragon/11.10.1/data/en_US/championFull.json")
    .then(response => response.json())
    .then(function(data){
        const champlist=[data];
        const champs = champlist.map(obj => {
            const champ = obj.data
            return Object.values(champ)
        });
        document.getElementById('column').innerHTML = `
        <!DOCTYPE html>
		<html><head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		    <title>${champName} - LoL Companion</title>
		    <link href="../../../style.css" rel="stylesheet" type="text/css">
		    <link href="../../champstyle.css" rel="stylesheet" type="text/css">
		    <script src="../../../display.js" type="text/javascript"></script>
		    <script src="../display.js" type="text/javascript"></script>
		    <meta charset="utf-8">
		  </head>
		  <body>
		    <div class="container">
		      <div class="column">
		        <h1>${champName}</h1>
		        <h3>the Darkin Blade</h3>
		        <img class="champImg" onclick="display(../../data_dragon/img/champion/loading/${champName}_0.jpg)" src="${champName}%20-%20LoL%20Companion_fichiers/${champName}_0.jpg">
		        <h2>Class :</h2>
		        <p>Fighter, Tank</p>
		        <h2>Lore :</h2>
		        <p>Once honored defenders of Shurima against the Void, ${champName} 
		and his brethren would eventually become an even greater threat to 
		Runeterra, and were defeated only by cunning mortal sorcery. But after 
		centuries of imprisonment, ${champName} was the first to find freedom once 
		more, corrupting and transforming those foolish enough to try and wield 
		the magical weapon that contained his essence. Now, with stolen flesh, 
		he walks Runeterra in a brutal approximation of his previous form, 
		seeking an apocalyptic and long overdue vengeance.</p>
		        <h2>Stats :</h2>
		        <table class="statsTable">
		          <tbody><tr>
		            <th>Health</th>
		            <th>Health per level</th>
		            <th>Mana</th>
		            <th>Mana per level</th>
		            <th>Movement speed</th>
		            <th>Armor</th>
		            <th>Armor per level</th>
		            <th>MR</th>
		            <th>MR per level</th>
		            <th>Range</th>
		            <th>HP regen</th>
		            <th>HP regen per level</th>
		            <th>Mana regen</th>
		            <th>Mana regen per level</th>
		            <th>Crit</th>
		            <th>Crit per level</th>
		            <th>AD</th>
		            <th>AD per level</th>
		            <th>AS per level</th>
		            <th>AS</th>
		          </tr>
		          <tr>
		            <td>580</td>
		            <td>90</td>
		            <td>0</td>
		            <td>0</td>
		            <td>345</td>
		            <td>38</td>
		            <td>3.25</td>
		            <td>32</td>
		            <td>1.25</td>
		            <td>175</td>
		            <td>3</td>
		            <td>1</td>
		            <td>0</td>
		            <td>0</td>
		            <td>0</td>
		            <td>0</td>
		            <td>60</td>
		            <td>5</td>
		            <td>2.5</td>
		            <td>0.651</td>
		          </tr>
		        </tbody></table>
		        <div class="spellResume">
		          <div class="spell">
		            <img class="spellIcon" src="${champName}%20-%20LoL%20Companion_fichiers/${champName}_Passive.png">
		            <h3>Passive : Deathbringer Stance</h3>
		            <p>Periodically, ${champName}'s next basic attack deals bonus 
					&lt;physicalDamage&gt;physical damage&lt;/physicalDamage&gt; and heals 
					him, based on the target's max health. </p>
		          </div>
		        </div>
		      </div>
		    </div>
		  
		</body></html>
        `;
    })