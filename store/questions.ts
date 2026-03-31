import { Question } from "../types/quiz";

export const mockQuestions: Question[] = [
  {
    id: 1,
    questionText:
      "Finansal piyasaların ekonomik gelişmişlik ile olan ilişkisi bağlamında, aşağıdakilerden hangisi doğrudur?",
    options: [
      "Piyasaların küçülmesi ülkenin daha fazla gelişme imkanına sahip olmasını sağlar.",
      "Finansal piyasaların büyüklüğü ve gelişmişlik düzeyi, ekonomik gelişmişlik ile ters orantılıdır.",
      "Finansal piyasaların büyüklüğü ve gelişmişlik düzeyi, ekonomik gelişmişlik ile doğru orantılıdır.",
      "Ekonomik gelişmişlik seviyesi sadece bireysel yatırımcı sayısına bağlıdır.",
      "Kurumsal yatırımcıların piyasadan çekilmesi piyasaların gelişmesini hızlandırır.",
    ],
    correctAnswer:
      "Finansal piyasaların büyüklüğü ve gelişmişlik düzeyi, ekonomik gelişmişlik ile doğru orantılıdır.",
  },
  {
    id: 2,
    questionText:
      "İktisadi açıdan reel (gerçek) piyasalar ile finansal (mali) piyasalar arasındaki temel fark aşağıdakilerden hangisinde doğru ifade edilmiştir?",
    options: [
      "Reel piyasalarda fon fazlası olanların tasarrufları, finansal piyasalarda ise üretim faktörleri işlem görür.",
      "Reel piyasalar üretilmiş mal, hizmet ve üretim faktörlerinin, finansal piyasalar ise fon arz edenlerle fon talep edenlerin karşılaştığı piyasalardır.",
      "Reel piyasalar sadece bankalardan, finansal piyasalar ise sadece tefecilerden oluşur.",
      "Reel piyasalarda para ve sermaye araçları alınıp satılırken, finansal piyasalarda tarım ürünleri takas edilir.",
      "Reel piyasalar her zaman vadeli işlemlere dayanır, finansal piyasalar ise sadece spot (peşin) işlemlerden oluşur.",
    ],
    correctAnswer:
      "Reel piyasalar üretilmiş mal, hizmet ve üretim faktörlerinin, finansal piyasalar ise fon arz edenlerle fon talep edenlerin karşılaştığı piyasalardır.",
  },
  {
    id: 3,
    questionText:
      "Aşağıdakilerden hangisi fon talep edenlerin değil, 'fon arz edenlerin' temel gerekçelerinden biridir?",
    options: [
      "Yatırım sermayesi ihtiyaçlarını karşılamak",
      "İşletme sermayesi ihtiyaçlarını karşılamak",
      "Tüketim harcamalarını anında finanse edebilmek",
      "Gelecek veya emeklilik için birikimde bulunmak",
      "Yatırım yapabilmek için dışarıdan likidite sağlamak",
    ],
    correctAnswer: "Gelecek veya emeklilik için birikimde bulunmak",
  },
  {
    id: 4,
    questionText:
      "Finansal piyasayı oluşturan temel unsurlar arasında aşağıdakilerden hangisi yer almaz?",
    options: [
      "Fon arz edenler (tasarruf sahipleri)",
      "Fon talep edenler (tüketici/yatırımcı)",
      "Hukuki ve idari düzen",
      "Bağımsız vergi daireleri",
      "Yardımcı kuruluşlar",
    ],
    correctAnswer: "Bağımsız vergi daireleri",
  },
  {
    id: 5,
    questionText:
      "İşlemlerin belirli kurallara göre yapıldığı, kendi binaları, üyeleri ve hiyerarşisi olan piyasalara ne ad verilir?",
    options: [
      "Organize Olmamış Piyasalar",
      "Organize (Örgütlenmiş) Piyasalar",
      "Tezgah Üstü Piyasalar",
      "Birincil Piyasalar",
      "İkincil Piyasalar",
    ],
    correctAnswer: "Organize (Örgütlenmiş) Piyasalar",
  },
  {
    id: 6,
    questionText:
      "Tasarruf sahiplerinin tahvil ve hisse senedi gibi menkul kıymetleri doğrudan ihraç eden kuruluşlardan ya da ihraçta aracılık eden kurumlardan ilk defa alabildikleri piyasalara ne ad verilir?",
    options: [
      "Vadeli (Türev) Piyasalar",
      "İkincil Piyasalar",
      "Spot (Nakit) Piyasalar",
      "Organize Olmamış Piyasalar",
      "Birincil Piyasalar",
    ],
    correctAnswer: "Birincil Piyasalar",
  },
  {
    id: 7,
    questionText:
      "Spot (Nakit) piyasalarda işlemlerin peşin yapılması durumunda, fiziki varlık tesliminin en geç kaç gün içinde yapılması zorunludur?",
    options: ["1 gün", "2 gün", "3 gün", "7 gün", "15 gün"],
    correctAnswer: "2 gün",
  },
  {
    id: 8,
    questionText:
      "Para piyasası ile sermaye piyasası karşılaştırıldığında aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "Para piyasasında orta ve uzun vadeli, sermaye piyasasında ise kısa vadeli fonlar işlem görür.",
      "Sermaye piyasasında finansal risk daima sıfırdır, para piyasasında ise yüksektir.",
      "Para piyasası kısa vadeli, düşük riskli ve yüksek likiditeli fonların işlem gördüğü yerken; sermaye piyasası orta ve uzun vadeli fon arz/talebinin karşılaştığı yerdir.",
      "Sermaye piyasasından sağlanan fonlar kredi olarak sadece işletmelerin dönen varlıklarının finansmanında kullanılır.",
      "Sermaye piyasasında hiçbir zaman hisse senedi ve uzun vadeli tahvil alım satımı yapılmaz.",
    ],
    correctAnswer:
      "Para piyasası kısa vadeli, düşük riskli ve yüksek likiditeli fonların işlem gördüğü yerken; sermaye piyasası orta ve uzun vadeli fon arz/talebinin karşılaştığı yerdir.",
  },
  {
    id: 9,
    questionText:
      "Sermaye piyasasının ekonomideki yeri ve önemi dikkate alındığında, bu piyasanın sermaye birikimini artırmadaki temel etkisi nasıl gerçekleşmektedir?",
    options: [
      "Kişilerin tüketim eğilimlerini azaltıp tasarruf eğilimlerini yükselterek",
      "Tasarruf eğilimlerini düşürüp ithalat oranını artırarak",
      "Küçük tasarrufların doğrudan banka mevduatlarına kilitlenmesini sağlayarak",
      "Orta ve uzun vadeli talep eden kuruluşlar arasındaki aracıları çoğaltarak",
      "Fonların üretim dışı reel sektörlerde atıl kalmasını sağlayarak",
    ],
    correctAnswer:
      "Kişilerin tüketim eğilimlerini azaltıp tasarruf eğilimlerini yükselterek",
  },
  {
    id: 10,
    questionText:
      "Avrupa'daki sanayi devrimi sonrası oluşan sermaye piyasası ile Osmanlı'da oluşan sermaye piyasası arasındaki temel fark nedir?",
    options: [
      "Avrupa'da hazinenin fon ihtiyaçlarını, Osmanlı'da ise özel şirketlerin fon ihtiyaçlarını karşılamak için ortaya çıkmıştır.",
      "Her iki piyasa da tamamen aynı amaçla, sömürgecilik hareketlerini finanse etmek için doğmuştur.",
      "Avrupa'da şirketlerin fon ihtiyaçlarını karşılamak için, Osmanlı'da ise devlet hazinesinin fon ihtiyaçlarını karşılamak için ortaya çıkmıştır.",
      "Osmanlı'da sermaye piyasası sanayi devrimini bizzat tetiklemek amacıyla kurulmuştur.",
      "Avrupa borsaları Osmanlı'daki Galata bankerlerinin denetimi altında faaliyete geçmiştir.",
    ],
    correctAnswer:
      "Avrupa'da şirketlerin fon ihtiyaçlarını karşılamak için, Osmanlı'da ise devlet hazinesinin fon ihtiyaçlarını karşılamak için ortaya çıkmıştır.",
  },
  {
    id: 11,
    questionText:
      "Osmanlı İmparatorluğu'nun İngiliz bankerlerden aldığı ilk dış borçlanma hangi yıl ve hangi tarihi sebeple gerçekleşmiştir?",
    options: [
      "1854 - Kırım Harbi sebebiyle",
      "1866 - Dersaadet Tahvilat Borsası'nın açılışı sebebiyle",
      "1906 - Esham ve Tahvilat Borsası'nın kurulması sebebiyle",
      "1923 - Cumhuriyet'in ilanı sebebiyle",
      "1881 - Muharrem Kararnamesi sebebiyle",
    ],
    correctAnswer: "1854 - Kırım Harbi sebebiyle",
  },
  {
    id: 12,
    questionText:
      "Galata bankerlerinin haksız kazanç elde etmeleri ve yabancıların oyunlarını engellemek amacıyla 1866 yılında Osmanlı Devleti tarafından kurulan ilk borsanın adı nedir?",
    options: [
      "İstanbul Menkul Kıymetler Borsası",
      "Esham ve Tahvilat Borsası",
      "Kambiyo, Esham ve Tahvilat Borsası",
      "Dersaadet Tahvilat Borsası",
      "Borsa İstanbul",
    ],
    correctAnswer: "Dersaadet Tahvilat Borsası",
  },
  {
    id: 13,
    questionText:
      "Türkiye Cumhuriyeti'nde 1960'lı yıllarda, ikinci el menkul kıymetler piyasasının doğmasına ve sermaye piyasasında hareketlenmeye yol açan araçlar aşağıdakilerden hangileridir?",
    options: [
      "Devlet Tahvili ve Hazine Bonosu",
      "Özel Sektör Tahvilleri ve Altın Sertifikaları",
      "Tasarruf Bonoları ve Hürriyet Tahvilleri",
      "Girişim Sermayesi Payları ve Opsiyonlar",
      "Yatırım Fonu Katılma Belgeleri ve Varantlar",
    ],
    correctAnswer: "Tasarruf Bonoları ve Hürriyet Tahvilleri",
  },
  {
    id: 14,
    questionText:
      "Sermaye piyasasının gelişmesi için 'hisse senedi arzını arttırmaya yönelik' alınabilecek tedbirler arasında aşağıdakilerden hangisi sayılmaktadır?",
    options: [
      "Bireylerin menkul kıymetlere yatırım yapmasını tamamen yasaklamak",
      "Kurumların menkul kıymetlere yatırım yapmasının önündeki engelleri artırmak",
      "Halka açık şirketlerde kurumlar vergisini düşürmek, buna karşılık kapalı şirketlerde vergi oranını yükseltmek",
      "Teşvik belgesi isteyen şirketlerde yüksek borç/öz varlık oranı aramak",
      "Şirketlerin nakit yönetimi amacıyla sadece uzun vadeli yatırımlara odaklanmasını sağlamak",
    ],
    correctAnswer:
      "Halka açık şirketlerde kurumlar vergisini düşürmek, buna karşılık kapalı şirketlerde vergi oranını yükseltmek",
  },
  {
    id: 15,
    questionText:
      "Aracı kuruluşların, SPK’dan yetki belgesi almak suretiyle yapabilecekleri sermaye piyasası faaliyetleri arasında aşağıdakilerden hangisi bulunmaz?",
    options: [
      "Portföy yöneticiliği yapmak",
      "Yatırım danışmanlığı yapmak",
      "Gayrimenkul projelerinin inşaat ve taahhüt işlerini yürütmek",
      "Her türlü türev araçlarının alım-satımının yapılmasına aracılık etmek",
      "Daha önce ihraç edilmiş sermaye piyasası araçlarının alım-satımına aracılık etmek",
    ],
    correctAnswer:
      "Gayrimenkul projelerinin inşaat ve taahhüt işlerini yürütmek",
  },
  {
    id: 16,
    questionText:
      "Sermaye piyasasında yatırım/aracı kuruluş olarak faaliyet gösteren Bankalar, mevcut bankacılık faaliyetlerine ek olarak aşağıdaki işlemlerden hangisini 'gerçekleştiremezler'?",
    options: [
      "Repo ve ters repo işlemleri",
      "Vadeli işlemler",
      "Hisse senetlerinin ilk defa halka arzı ile birinci ve ikinci piyasa işlemleri",
      "Hisse senedi dışındaki menkul kıymetlerin alım satımına aracılık",
      "Hisse senedi harici sabit getirili kıymet aracılığı",
    ],
    correctAnswer:
      "Hisse senetlerinin ilk defa halka arzı ile birinci ve ikinci piyasa işlemleri",
  },
  {
    id: 17,
    questionText:
      "Sermaye Piyasası Kurulu tarafından düzenlenen, gayrimenkullere ve projelere yatırım yapan, portföyündeki gayrimenkullerden kira ve alım satım kazancı elde eden, üstelik gelirleri kurumlar vergisinden istisna tutulmuş kurum hangisidir?",
    options: [
      "Portföy Saklama Kuruluşu",
      "Girişim Sermayesi Yatırım Ortaklığı",
      "Gayrimenkul Değerleme Şirketi",
      "Menkul Kıymet Yatırım Ortaklığı",
      "Gayrimenkul Yatırım Ortaklığı",
    ],
    correctAnswer: "Gayrimenkul Yatırım Ortaklığı",
  },
  {
    id: 18,
    questionText:
      "Dinamik, yaratıcı ancak finansal gücü yeterli olmayan girişimcilerin (ürün araştırma-geliştirme aşamasından pazarlama sürecine kadar) yatırım fikirlerini gerçekleştirmeye olanak tanıyan finansman biçimi aşağıdakilerden hangisidir?",
    options: [
      "Katılım Şemsiye Fonu",
      "Girişim Sermayesi (Venture Capital)",
      "Gayrimenkul Yatırım Ortaklığı",
      "Portföy Yöneticiliği",
      "Spot Piyasa İşlemi",
    ],
    correctAnswer: "Girişim Sermayesi (Venture Capital)",
  },
  {
    id: 19,
    questionText:
      "Yatırım fonlarının hukuki yapısı ve mal varlığıyla ilgili olarak aşağıdaki ifadelerden hangisi 'doğrudur'?",
    options: [
      "Yatırım fonlarının kendine ait bir tüzel kişiliği bulunmaktadır.",
      "Fonun mal varlığı üçüncü kişiler tarafından serbestçe haczedilebilir.",
      "Fon tüzel kişilik sahibi olmamakla beraber fonun mal varlığı kurucudan ayrıdır; rehnedilemez ve teminat gösterilemez.",
      "Fon kurucusunun borçlarından dolayı fon malvarlığına el konulabilir.",
      "Yatırım fonları kendi adlarına şube açarak fiziki ürün ticareti yapabilirler.",
    ],
    correctAnswer:
      "Fon tüzel kişilik sahibi olmamakla beraber fonun mal varlığı kurucudan ayrıdır; rehnedilemez ve teminat gösterilemez.",
  },
  {
    id: 20,
    questionText:
      "Sermaye Piyasası düzenlemelerine göre, yatırım fonları aşağıdakilerden hangisine yatırım yapamaz?",
    options: [
      "Türkiye'de kurulan ihraççılara ait paylar",
      "12 aydan uzun vadeli olmamak üzere vadeli mevduat, katılma hesabı ve mevduat sertifikaları",
      "36 ay vadeli mevduat hesapları",
      "Borsada işlem görmek kaydıyla altın ve diğer kıymetli madenler",
      "Repo ve ters repo işlemleri",
    ],
    correctAnswer: "36 ay vadeli mevduat hesapları",
  },
  {
    id: 21,
    questionText:
      "Yatırım fonlarının, binlerce kişiden para toplayarak yüksek miktarlarda portföyler oluşturması ve bu sayede yatırımcının 2 şirketin payını alması durumundaki riski 25 ayrı şirketin payına bölerek düşüşlerden daha az etkilenmesini sağlayan temel ilkesi hangisidir?",
    options: [
      "Profesyonel Yönetim İlkesi",
      "Mal Varlığının Korunması İlkesi",
      "Riskin Dağıtılması İlkesi",
      "Menkul Kıymet Portföyü İşletme İlkesi",
      "Tezgah Üstü Örgütlenme İlkesi",
    ],
    correctAnswer: "Riskin Dağıtılması İlkesi",
  },
  {
    id: 22,
    questionText:
      "Yatırım fonlarında tür belirlemesi yapılırken, bir fonun 'Hisse Senedi Şemsiye Fonu' veya 'Borçlanma Araçları Şemsiye Fonu' olabilmesi için fon toplam değerinin en az yüzde kaçının devamlı olarak bu araçlara yatırılması gerekmektedir?",
    options: ["%20", "%50", "%60", "%80", "%100"],
    correctAnswer: "%80",
  },
  {
    id: 23,
    questionText:
      "Portföyünün tamamı devamlı olarak vadesine en fazla 184 gün kalmış likiditesi yüksek araçlardan oluşan ve portföyünün günlük olarak hesaplanan ağırlıklı ortalama vadesi en fazla 45 gün olan fonları kapsayan şemsiye fon türü aşağıdakilerden hangisidir?",
    options: [
      "Değişken Şemsiye Fon",
      "Para Piyasası Şemsiye Fonu",
      "Kıymetli Madenler Şemsiye Fonu",
      "Katılım Şemsiye Fonu",
      "Girişim Sermayesi Şemsiye Fonu",
    ],
    correctAnswer: "Para Piyasası Şemsiye Fonu",
  },
  {
    id: 24,
    questionText:
      "Portföyünün tamamı devamlı olarak kira sertifikaları, katılma hesapları, ortaklık payları, altın ve Kurulca uygun görülen diğer faize dayalı olmayan para ve sermaye piyasası araçlarından oluşan fon türü nedir?",
    options: [
      "Katılım Şemsiye Fonu",
      "Borçlanma Araçları Şemsiye Fonu",
      "Para Piyasası Şemsiye Fonu",
      "Değişken Şemsiye Fon",
      "Kıymetli Madenler Şemsiye Fonu",
    ],
    correctAnswer: "Katılım Şemsiye Fonu",
  },
  {
    id: 25,
    questionText:
      "Yatırım fonlarına yatırım yaparken dikkat edilmesi gereken hususlar (risk düzeyi, geçmiş performans, gider oranları) göz önüne alındığında aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Yatırım fonları da belli düzeyde risk barındırır ve anaparanın bir kısmının kaybedilme ihtimali vardır.",
      "Yatırım fonlarında banka mevduatındaki gibi bir kesin getiri garantisi yoktur.",
      "Bir fonun geçmiş dönemdeki yüksek performansı, gelecek dönemdeki yüksek getirisinin kesin bir garantisidir.",
      "Gider oranı daha yüksek olan bir fon her zaman daha kötü getiri elde edecek demek değildir; aktif alım satım kazançları giderleri karşılayabilir.",
      "Performans sunumları KAP'ta ve kolektif yatırım kuruluşlarının internet sitelerinde yayımlanmaktadır.",
    ],
    correctAnswer:
      "Bir fonun geçmiş dönemdeki yüksek performansı, gelecek dönemdeki yüksek getirisinin kesin bir garantisidir.",
  },
  {
    id: 26,
    questionText:
      "Finansal piyasaların gelişmesi için piyasada kimlerin daha fazla yer almasını sağlamak gerekmektedir?",
    options: [
      "Sadece yabancı yatırımcıların",
      "Sadece kurumsal yatırımcıların",
      "Gerek bireysel gerekse kurumsal yatırımcıların",
      "Sadece devlet kurumlarının ve merkez bankasının",
      "Sadece aracı kurumların ve tefecilerin",
    ],
    correctAnswer: "Gerek bireysel gerekse kurumsal yatırımcıların",
  },
  {
    id: 27,
    questionText:
      "İktisadi açıdan piyasa kavramı tanımlanırken, alıcı ve satıcıların karşılıklı iletişim içinde oldukları bu ortamda temel olarak neyin gerçekleştiği ifade edilir?",
    options: [
      "Sadece hukuki anlaşmazlıkların çözümü",
      "Para-mal değişiminin (mübadele)",
      "Üretim faktörlerinin millileştirilmesi",
      "Kurumlar vergisinin tahsilatı",
      "İşçi ve işveren sendikalarının sözleşmeleri",
    ],
    correctAnswer: "Para-mal değişiminin (mübadele)",
  },
  {
    id: 28,
    questionText:
      "Finansal piyasalarda alınıp satılan ve kıymetli evrak niteliği taşıyan belgelere genel olarak ne ad verilmektedir?",
    options: [
      "Tüketim malı",
      "Reel varlık",
      "Mali varlık",
      "Taşınmaz varlık",
      "Sabit kıymet",
    ],
    correctAnswer: "Mali varlık",
  },
  {
    id: 29,
    questionText:
      "Aşağıdakilerden hangisi 'fon talep edenlerin' temel gerekçelerinden biridir?",
    options: [
      "Gelirler ve giderler arasındaki vade uyumunu sağlamak",
      "Gelir (faiz veya temettü) elde etmek",
      "Gelecek veya emeklilik için birikimde bulunmak",
      "Gelirler ve giderler arasındaki zaman uyumsuzluğunu gidermek",
      "Tasarruflarını likit tutarak enflasyondan korunmak",
    ],
    correctAnswer:
      "Gelirler ve giderler arasındaki zaman uyumsuzluğunu gidermek",
  },
  {
    id: 30,
    questionText:
      "Belirli kuralları ve fiziki bir yeri bulunmayan, fiyatların pazarlık yoluyla belirlendiği ve tefecilerin örnek olarak gösterildiği piyasa türü aşağıdakilerden hangisidir?",
    options: [
      "Organize (Örgütlenmiş) Piyasalar",
      "İkincil Piyasalar",
      "Organize Olmamış (Örgütlenmemiş) Piyasalar",
      "Birincil Piyasalar",
      "Vadeli Piyasalar",
    ],
    correctAnswer: "Organize Olmamış (Örgütlenmemiş) Piyasalar",
  },
  {
    id: 31,
    questionText:
      "Daha önce birincil piyasalarda satılmış ve yatırımcıların portföylerinde bulunan finansal varlıkların alınıp satıldığı piyasalara ne ad verilir?",
    options: [
      "Spot Piyasalar",
      "Para Piyasaları",
      "Birincil Piyasalar",
      "Tezgah Üstü Piyasalar",
      "İkincil Piyasalar",
    ],
    correctAnswer: "İkincil Piyasalar",
  },
  {
    id: 32,
    questionText:
      "Belirli bir sözleşme imzalanmasına dayanan, fiziki teslim ve ödemelerin ileride kararlaştırılan belli bir tarihte yapıldığı piyasa türü hangisidir?",
    options: [
      "Spot (Nakit) Piyasalar",
      "Vadeli (Türev) Piyasalar",
      "Reel Piyasalar",
      "Organize Olmamış Piyasalar",
      "Para Piyasaları",
    ],
    correctAnswer: "Vadeli (Türev) Piyasalar",
  },
  {
    id: 33,
    questionText:
      "Para piyasasından sağlanan kısa vadeli fonlar, işletmeler tarafından kredi olarak genellikle hangi amaçla kullanılır?",
    options: [
      "Uzun vadeli gayrimenkul yatırımları yapmak için",
      "Dönen varlıkların finansmanında",
      "Kurumlar vergisini sıfırlamak için",
      "Yeni şirket kurmak ve Ar-Ge yatırımları için",
      "Hisse senedi ihraç giderlerini karşılamak için",
    ],
    correctAnswer: "Dönen varlıkların finansmanında",
  },
  {
    id: 34,
    questionText:
      "İşletmelerin ihtiyaç duyduğu orta ve uzun vadeli fonların arz ve talebinin aracı kuruluşlar aracılığıyla, menkul kıymetlere bağlı olarak karşılaştığı piyasaya ne ad verilir?",
    options: [
      "Para Piyasası",
      "Reel Piyasa",
      "Sermaye Piyasası",
      "Türev Piyasa",
      "Spot Piyasa",
    ],
    correctAnswer: "Sermaye Piyasası",
  },
  {
    id: 35,
    questionText:
      "Sermaye piyasasının ekonomideki önemi bağlamında, tek başına yararlı olamayan küçük tasarrufları 'damlalardan göller meydana getirerek' neye dönüştürdüğü ifade edilmektedir?",
    options: [
      "Kısa vadeli tüketim harcamalarına",
      "Yabancı devlet borçlarına",
      "Büyük yatırımlara",
      "Enflasyonist baskılara",
      "Vergiden muaf atıl fonlara",
    ],
    correctAnswer: "Büyük yatırımlara",
  },
  {
    id: 36,
    questionText:
      "Sermaye piyasalarının uzun vadeli finansal araçlara yatırım yapmayı özendirmesindeki en önemli faktör, bu araçların hangi özelliğidir?",
    options: [
      "Kolayca alınıp satılabilen likit varlıklar olmaları",
      "Hiçbir zaman değer kaybetmemeleri",
      "Sadece kurumsal firmalar tarafından alınabilmeleri",
      "Fiziki olarak kasalarda saklanma zorunlulukları olması",
      "İşlemlerin pazarlık usulüyle yapılması",
    ],
    correctAnswer: "Kolayca alınıp satılabilen likit varlıklar olmaları",
  },
  {
    id: 37,
    questionText:
      "1866 yılında Osmanlı'nın ilk borsası olarak kurulan 'Dersaadet Tahvilat Borsası', 1906 yılında çıkarılan nizamname ile hangi ismi almıştır?",
    options: [
      "Borsa İstanbul",
      "Kambiyo, Esham ve Tahvilat Borsası",
      "İstanbul Menkul Kıymetler Borsası",
      "Esham ve Tahvilat Borsası",
      "İstanbul Altın Borsası",
    ],
    correctAnswer: "Esham ve Tahvilat Borsası",
  },
  {
    id: 38,
    questionText:
      "Cumhuriyet döneminde, 1929 yılında çıkarılan 'Menkul Kıymetler ve Kambiyo Borsaları Kanunu' sermaye piyasasını iyice sınırlandırmıştır. Bunun temel nedeni aşağıdakilerden hangisidir?",
    options: [
      "Borsada işlem yapanların Türk olması zorunluluğunun tamamen kaldırılması",
      "Borsada kaydı olmayan menkul değerlerin alınıp satılmasının yasaklanması",
      "Bankaların hisse senedi alım satımına başlaması",
      "Hürriyet tahvillerinin zorunlu tutulması",
      "Sermaye Piyasası Kurulu'nun erken feshedilmesi",
    ],
    correctAnswer:
      "Borsada kaydı olmayan menkul değerlerin alınıp satılmasının yasaklanması",
  },
  {
    id: 39,
    questionText:
      "İstanbul Menkul Kıymetler Borsası 1938 yılında çıkarılan bir kararname ile hangi ile taşınmış ve hangi adı almıştır?",
    options: [
      "İzmir'e taşınmış, Vadeli İşlemler ve Opsiyon Borsası adını almıştır.",
      "Ankara'ya taşınmış, Kambiyo, Esham ve Tahvilat Borsası adını almıştır.",
      "Bursa'ya taşınmış, Esham ve Tahvilat Borsası adını almıştır.",
      "Ankara'ya taşınmış, Dersaadet Tahvilat Borsası adını almıştır.",
      "İzmir'e taşınmış, Borsa İstanbul adını almıştır.",
    ],
    correctAnswer:
      "Ankara'ya taşınmış, Kambiyo, Esham ve Tahvilat Borsası adını almıştır.",
  },
  {
    id: 40,
    questionText:
      "1980'li yılların başında Türkiye'de sermaye piyasasını düzenleyen kanun ve kurumların olmaması sebebiyle yaşanan kriz aşağıdakilerden hangisi olarak bilinir?",
    options: [
      "Kırım Harbi Krizi",
      "Tanzimat Krizi",
      "Bankerler Olayı",
      "Galata Bankerleri Krizi",
      "Altın Borsası Krizi",
    ],
    correctAnswer: "Bankerler Olayı",
  },
  {
    id: 41,
    questionText:
      "Bankerler Olayı sonrasında sermaye piyasasının yeniden düzenlenmesi amacıyla Sermaye Piyasası Kurulu (SPK) hangi yıl kurulmuştur?",
    options: ["1929", "1960", "1981", "1982", "1985"],
    correctAnswer: "1982",
  },
  {
    id: 42,
    questionText:
      "Sermaye piyasamızın gelişmesi için 'hisse senedi arzını arttırmaya' yönelik tedbirler arasında, teşvik belgesi ve kredi isteyen şirketlerde hangi oranın düşük olması aranmalıdır?",
    options: [
      "Kar / Zarar oranı",
      "Borç / Öz varlık oranı",
      "İhracat / İthalat oranı",
      "Likidite / Vade oranı",
      "Döviz / TL oranı",
    ],
    correctAnswer: "Borç / Öz varlık oranı",
  },
  {
    id: 43,
    questionText:
      "Aşağıdakilerden hangisi sermaye piyasamızda 'talebi geliştirmeye' yönelik alınması gereken tedbirlerden biridir?",
    options: [
      "Halka açık şirketlerde kurumlar vergisini düşürmek",
      "Kapalı şirketlerde vergi oranını yükseltmek",
      "Kalkınma bankalarını mevcut hisse senetlerini halka satmaya teşvik etmek",
      "Şirket ve kurumların nakit yönetimi amacıyla menkul kıymetlere kısa vadeli yatırım yapmasına imkân sağlamak",
      "Teşvikleri belli bir orandaki yeni hisseleri halka arz etme şartıyla vermek",
    ],
    correctAnswer:
      "Şirket ve kurumların nakit yönetimi amacıyla menkul kıymetlere kısa vadeli yatırım yapmasına imkân sağlamak",
  },
];
