import { Question } from "../types/quiz";

export const mockQuestions: Question[] = [
  {
    id: 1,
    questionText:
      "Aşağıdakilerden hangisi en çok kullanılan işletim sistemlerinden biri değildir?",
    options: ["Windows", "IOS", "Android", "Pardus", "MacOs"],
    correctAnswer: "Pardus",
  },
  {
    id: 2,
    questionText: "Google, Android’i kaç yılında satın almıştır?",
    options: ["2003", "2004", "2005", "2007", "2008"],
    correctAnswer: "2005",
  },
  {
    id: 3,
    questionText:
      "Bir veriyi işlemek üzere çalışan bir programa ne ad verilir?",
    options: ["İşlem", "I/O", "Bellek", "MİB (Merkezi İşlem Birimi)", "CPU"],
    correctAnswer: "İşlem",
  },
  {
    id: 4,
    questionText:
      "…………….. bilgisayarlar ilk çıktığı zamanlardan bu yana devamlı gündemde olmuş zararlı yazılımlardır. Boş bırakılan yer ne ile doldurulmalıdır?",
    options: ["Yazılım", "Virüs", "BUS", "Kesme (Interrupt)", "Donanım"],
    correctAnswer: "Virüs",
  },
  {
    id: 5,
    questionText:
      "“General Public License” lisansı kim tarafından ve kaç yılında geliştirilmiştir?",
    options: [
      "Richard Stallman – 1983",
      "Bill Gates – 1980",
      "Rich Miner – 1983",
      "Andy Rubin – 1980",
      "Bill Gates - 1981",
    ],
    correctAnswer: "Richard Stallman – 1983",
  },
  {
    id: 6,
    questionText:
      "Aşağıdakilerden hangisi açık kaynak işletim sistemlerinden birisidir?",
    options: ["Android", "Ubuntu", "Windows 2000", "Windows 97", "Windows 7"],
    correctAnswer: "Ubuntu",
  },
  {
    id: 7,
    questionText:
      "TÜBİTAK-UEKAE (Ulusal Elektronik ve Kriptoloji Araştırma Enstitüsü) bünyesinde yürütülen bir işletim sistemi geliştirme projesi hangisidir?",
    options: ["Pardus", "Debian", "Linux", "Opensuse", "Fedora"],
    correctAnswer: "Pardus",
  },
  {
    id: 8,
    questionText: "Windows’un en çok kullanılan sürümü hangisidir?",
    options: [
      "Windows XP",
      "Windows 2000",
      "Windows 7",
      "Windows 8",
      "Windows 10",
    ],
    correctAnswer: "Windows 7",
  },
  {
    id: 9,
    questionText: "İlk Windows kaç yılında satışa sunulmuştur?",
    options: ["1980", "1981", "1982", "1983", "1984"],
    correctAnswer: "1981",
  },
  {
    id: 10,
    questionText:
      "Donanım ile işletim sistemi arasında köprü görevi yapan nedir?",
    options: ["Bellek", "Output (Çıkış)", "Input (Giriş)", "BIOS", "İşlemci"],
    correctAnswer: "BIOS",
  },
  {
    id: 11,
    questionText:
      "Aşağıdakilerden hangisi işletim sistemi servisleri içinde yer almaz?",
    options: [
      "Program Yürütme",
      "Performans Ayarları",
      "I/O Operatörleri",
      "Hata Tespiti",
      "Kaynak Tahsisi",
    ],
    correctAnswer: "Performans Ayarları",
  },
  {
    id: 12,
    questionText:
      "Komut Yorumlayıcısı için aşağıdakilerden hangisi söylenemez?",
    options: [
      "Verilen komutların çoğu dosyaları işler:,oluştur, siler, listeler, yazdırır, kopyalar, yürütür vb. işlemleri gerçekleştirir.",
      "Bazı işletim sistemleri çekirdekteki komut yorumlayıcısını dahil eder.",
      "Windows ve UNIX gibi işletim sistemlerinde komut yorumlayıcısına, bir iş başlatıldığında veya bir kullanıcı ilk kez oturum açtığında çalışan bir program gibi davranır",
      "Üçüncü şahıslar tarafından yazılan ve ücretsiz olan kabuklar da mevcuttur.",
      "UNIX’te dosya silme komutu remove file.txt",
    ],
    correctAnswer: "UNIX’te dosya silme komutu remove file.txt",
  },
  {
    id: 13,
    questionText:
      "Aşağıdakilerden hangisi komut yorumlayıcı kabukları arasında yer almaz?",
    options: [
      "Bourne Shell",
      "C Shell",
      "Bourne-Again Shell",
      "Korn Shell",
      "Royal Dutch Shell",
    ],
    correctAnswer: "Royal Dutch Shell",
  },
  {
    id: 14,
    questionText: "Aşağıdakilerden hangisi sistem çağrıları için söylenemez?",
    options: [
      "Bir işletim sistemi tarafından sunulan servislere arayüz sağlar.",
      "Politika kararları daha sonra değiştirilecekse, bu ayrım maksimum esnekliğe izin verir.",
      "Sistemler sık sık saniyede binlerce işletim sistemi çağrısı gerçekleştirir.",
      "C dilinde yazılmış programlar için UNIX ve Linux kütüphanesi libc olarak adlandırılır.",
      "Basit programlar bile işletim sisteminden çok fazla faydalanabilir.",
    ],
    correctAnswer:
      "Politika kararları daha sonra değiştirilecekse, bu ayrım maksimum esnekliğe izin verir.",
  },
  {
    id: 15,
    questionText:
      "Aşağıdakilerden hangisi sistem çağrıları türlerinden değildir?",
    options: [
      "Süreç Kontrolü",
      "Dosya Yönetimi",
      "Cihaz Yönetimi",
      "İletişim",
      "Dosya Yolu",
    ],
    correctAnswer: "Dosya Yolu",
  },
  {
    id: 16,
    questionText: "Aşağıdakilerden hangisi Sistem Programları için söylenemez?",
    options: [
      "En düşük seviye donanımdır.",
      "Bu programlar aynı zamanda asgari bir performans etkisine sahiptir.",
      "Sistem Programları, sistem araçları olarak da bilinir.",
      "Program yürütme ve geliştirme için gerekli ortamı sağlar.",
      "Bazıları sadece sistem çağrıları kullanıcı arayüzüdür.",
    ],
    correctAnswer:
      "Bu programlar aynı zamanda asgari bir performans etkisine sahiptir.",
  },
  {
    id: 17,
    questionText:
      "I-Dosya yönetimi II-Durum Bilgisi III- Cihaz Yönetimi IV-Program Çekirdeği V- Dosya Değişikliği VI-Bilgi Bakımı. Yukarıdakilerden hangileri Sistem Programları kategorilerinde yer alır?",
    options: ["I,II,III,V", "I-II-V", "I ve VI", "I-V", "Hiçbiri VI"],
    correctAnswer: "I-II-V",
  },
  {
    id: 18,
    questionText:
      "En üst düzey Tasarım Hedeflerinde; sistem tasarımı, donanım seçiminden ve sistem türünden etkilenir. Aşağıdakilerden hangisi bu tasarımlar içinde yer almaz?",
    options: [
      "Yığınlar",
      "Zaman Paylaşımı",
      "Arka Plan Hizmetleri",
      "Tek Kullanıcılı",
      "Çok Kullanıcılı",
    ],
    correctAnswer: "Arka Plan Hizmetleri",
  },
  {
    id: 19,
    questionText:
      "Solaris işletim sistemi yapısı, kaç tür yüklenebilir çekirdek modülü etrafında düzenlenmiştir?",
    options: ["5", "4", "3", "6", "7"],
    correctAnswer: "4",
  },
  {
    id: 20,
    questionText: "Aşağıdakilerden hangisi MS-DOS level yapısında yer almaz?",
    options: [
      "Uygulama Programları",
      "Yerleşik Sistem Programları",
      "MS-DOS Cihaz Programları",
      "İşlemci Cihaz Programları",
      "ROM BIOS Cihaz Programları",
    ],
    correctAnswer: "İşlemci Cihaz Programları",
  },
  {
    id: 21,
    questionText:
      "1. Yığın, 2. Veri bölümü, 3. Matematiksel sayaçlar (Program Counter). Bir işlem (process) yukarıdakilerden hangilerini içermelidir?",
    options: ["2 ve 3", "1 ve 3", "Yalnız 1", "1,2 ve 3", "1 ve 2"],
    correctAnswer: "1 ve 2",
  },
  {
    id: 22,
    questionText:
      "Bir işlem çalıştırılırken, işlemin bir işlemciye atanmayı beklediği durum hangisidir?",
    options: [
      "New Komutu",
      "Running Komutu",
      "Waiting Komutu",
      "Terminated Komutu",
      "Ready Komutu",
    ],
    correctAnswer: "Ready Komutu",
  },
  {
    id: 23,
    questionText:
      "Aşağıdakilerden hangisi İşlem Kontrol Bloğu (PCB) aracılığıyla elde edilecek bilgilerden değildir?",
    options: [
      "CPU zamanlama bilgileri",
      "Hafıza yönetim bilgileri",
      "Hesap bilgileri",
      "I/O durum bilgileri",
      "Bir Sonraki işlem bilgileri",
    ],
    correctAnswer: "Bir Sonraki işlem bilgileri",
  },
  {
    id: 24,
    questionText:
      "Aşağıdakilerden hangisi direkt iletişim bağlantısının özelliklerinden değildir?",
    options: [
      "Bağlantılar otomatik olarak sağlanır.",
      "Bir bağlantı sadece bir çift işlemci arasında oluşturulur.",
      "Her bir çift için sadece bir bağlantı oluşturulur.",
      "Bağlantı tek yönlü olabilir, ama genellikle çift yönlüdür.",
      "Bağlantı sadece işlemler ortak bir posta kutusunu paylaşıyor ise oluşturulur.",
    ],
    correctAnswer:
      "Bağlantı sadece işlemler ortak bir posta kutusunu paylaşıyor ise oluşturulur.",
  },
  {
    id: 25,
    questionText:
      "Aşağıdakilerden hangisi dolaylı iletişim (Indirect Communication) bağlantısının özelliklerinden değildir?",
    options: [
      "Bağlantı sadece işlemler ortak bir posta kutusunu paylaşıyor ise oluşturulur.",
      "İkiden fazla işlem tek bir posta kutusu ile ilişkilendirilebilir.",
      "Bağlantı çift yönlü olabilir.",
      "Bağlantı tek yönlü olabilir.",
      "Her bir çift için sadece bir bağlantı oluşturulur.",
    ],
    correctAnswer: "Her bir çift için sadece bir bağlantı oluşturulur.",
  },
  {
    id: 26,
    questionText: "İletişim amaçlı bağlantı noktalarına ne ad verilir?",
    options: ["İşlem", "Aracı", "Kanal", "Bağlantı", "Soket"],
    correctAnswer: "Soket",
  },
  {
    id: 27,
    questionText: "Çalışmakta olan program ne ile ifade edilir?",
    options: ["Soket", "Aracı", "Kanal", "Bağlantı", "İşlem"],
    correctAnswer: "İşlem",
  },
  {
    id: 28,
    questionText:
      "Ana hafızadaki, tüm işlemlerin kümesinin çalışmaya hazırlandığı (CPU'yu beklediği) kuyruk hangisidir?",
    options: [
      "Ready Queue",
      "Job Queue",
      "Device Queues",
      "Mobil Queues",
      "CPU Queues",
    ],
    correctAnswer: "CPU Queues",
  },
  {
    id: 29,
    questionText:
      "1. Kısa Zamanlayıcılar, 2. Orta Zamanlayıcılar, 3. Uzun Zamanlayıcılar. Yukarıdakilerden hangileri zamanlayıcı (Scheduler) türlerindendir?",
    options: ["2 ve 3", "Yalnız 1", "1,2 ve 3", "1 ve 2", "1 ve 3"],
    correctAnswer: "1 ve 3",
  },
  {
    id: 30,
    questionText:
      "Kısa vadeli zamanlayıcılar (Short-term scheduler) için aşağıdakilerden hangisi söylenemez?",
    options: [
      "CPU zamanlayıcısı da denir",
      "Çok sık çalıştırılır",
      "Milisaniyelerle ifade edilir.",
      "Hızlı çalıştırılmalıdır.",
      "Hangi işlemlerin hazır kuyruğuna alınması gerektiğine karar verir.",
    ],
    correctAnswer:
      "Hangi işlemlerin hazır kuyruğuna alınması gerektiğine karar verir.",
  },
  {
    id: 31,
    questionText:
      "Aşağıdakiler hangisi MultiThread (Çoklu İş Parçacığı) özelliklerindendir?",
    options: [
      "Yanıt Verebilirlik",
      "Kaynak Paylaşımı",
      "Maliyet (Ekonomi)",
      "Ölçeklenebilirlik",
      "Hepsi",
    ],
    correctAnswer: "Hepsi",
  },
  {
    id: 32,
    questionText: "Aşağıdakilerden hangisi MultiThread modeli değildir?",
    options: [
      "Çoktan bire",
      "Bire bir",
      "Çoktan çoğa",
      "İki Seviyeli",
      "Birden Çoka",
    ],
    correctAnswer: "Birden Çoka",
  },
  {
    id: 33,
    questionText:
      "I. ETHREAD (Yönetici iş parçası bloğu), II. KTHREAD (Çekirdek iş parçası bloğu), III. TEB (İş parçası ortam bloğu). Yukarıdakilerden hangileri Windows Threads’lerin ana veri yapılarındandır?",
    options: ["Yalnız I", "Yalnız II", "II ve III", "I ve II", "I,II,III"],
    correctAnswer: "I,II,III",
  },
  {
    id: 34,
    questionText:
      "Aşağıdakilerden hangisi Windows Thread'lerin özelliklerinden değildir?",
    options: [
      "Thread id’si vardır.",
      "Thread Name (İsim) bulunur.",
      "İşlemci durumunu temsil eden register kümesi bulunur.",
      "Ayrı kullanıcı ve çekirdek stack’leri thread kullanıcı ve çekirdek modunda çalışırken kullanılır.",
      "Özel veri depolama alanı, çalışma zamanı kütüphaneleri ve dinamik bağlama kütüphaneleri (DLL) tarafından kullanılır.",
    ],
    correctAnswer: "Thread Name (İsim) bulunur.",
  },
  {
    id: 35,
    questionText:
      "Mevcut bir süreçte yeni bir iş parçacığı oluşturmak için gereken süre ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Yeni bir süreç oluşturmak için gereken süreden daha büyüktür.",
      "Yeni bir süreç oluşturmak için gereken süreden daha azdır.",
      "Yeni bir süreç oluşturmak için gereken zamana eşittir.",
      "Hiçbiri",
      "Hepsi",
    ],
    correctAnswer: "Yeni bir süreç oluşturmak için gereken süreden daha azdır.",
  },
  {
    id: 36,
    questionText:
      "Bir iş parçacığının engellendiği (blocked) durum gerçekleştiğinde, aşağıdakilerden hangisi gerçekleşir?",
    options: [
      "İş parçacığı hazır kuyruğa taşınır.",
      "İş parçacığı izleri (yürütülmesi) engellenir.",
      "İş parçacığı tamamlanır.",
      "Yeni bir iş parçacığı beklenir.",
      "İş parçacığı sonlandırılır.",
    ],
    correctAnswer: "İş parçacığı hazır kuyruğa taşınır.",
  },
  {
    id: 37,
    questionText:
      "Bir çekirdek iş parçacığının, kullanıcı düzeyindeki birçok iş parçacığıyla eşlendiği model aşağıdakilerden hangisidir?",
    options: [
      "Çoktan Bire Modeli",
      "Birden Çoğa Modeli",
      "Çoktan Çoğa Modeli",
      "Bire Bir Modeli",
      "Hiçbiri",
    ],
    correctAnswer: "Çoktan Bire Modeli",
  },
  {
    id: 38,
    questionText:
      "Kullanıcı düzeyinde bir iş parçacığının birçok çekirdek düzeyinde iş parçacığıyla eşlendiği (1 kullanıcı - Çok Çekirdek) model hangisidir?",
    options: [
      "Çoktan Bire Modeli",
      "Birden Çoğa Modeli",
      "Çoktan Çoğa Modeli",
      "Bire Bir Modeli",
      "Hiçbiri",
    ],
    correctAnswer: "Birden Çoğa Modeli",
  },
  {
    id: 39,
    questionText:
      "Birebir (One-to-One) modeli ile ilgili olarak aşağıdakilerden hangisi doğrudur?",
    options: [
      "Eş zamanlılığı arttırır.",
      "Eş zamanlılığı azaltır.",
      "Eş zamanlılığı duruma göre arttırır veya azaltır.",
      "Eş zamanlılığı değiştirmez.",
      "Hepsi",
    ],
    correctAnswer: "Eş zamanlılığı arttırır.",
  },
  {
    id: 40,
    questionText: "Many to one (Çoktan Bire) modeli ne zaman avantaj sağlar?",
    options: [
      "Programın çok iş parçacığına ihtiyacı olmadığı zaman.",
      "Program çok iş parçacıklı olması gerektiğinde.",
      "Tek işlemci olduğunda (veya işletim sistemi çekirdeği thread desteklemediğinde).",
      "Çok işlemcili olduğunda.",
      "Hiçbiri",
    ],
    correctAnswer: "Programın çok iş parçacığına ihtiyacı olmadığı zaman.",
  },
  {
    id: 41,
    questionText:
      "İşletim sisteminin temel görevleri düşünüldüğünde, aşağıdakilerden hangisi 'kaynak ayırıcı' (resource allocator) rolü kapsamına girer?",
    options: [
      "Kullanıcı programlarının yürütülmesi",
      "Donanım kaynaklarının (CPU süresi, bellek, I/O) çakışan talepler arasında verimli yönetilmesi",
      "Bilgisayar sisteminin hatalı kullanımını önlemek",
      "Kullanıcıya grafik arayüz sunmak",
      "Veri tabanı sorgularını optimize etmek",
    ],
    correctAnswer:
      "Donanım kaynaklarının (CPU süresi, bellek, I/O) çakışan talepler arasında verimli yönetilmesi",
  },
  {
    id: 42,
    questionText:
      "Moore Yasası'na göre, entegre devreler üzerindeki transistör sayısı yaklaşık olarak kaç ayda bir iki katına çıkar?",
    options: ["6", "12", "18", "24", "36"],
    correctAnswer: "18",
  },
  {
    id: 43,
    questionText:
      "Bir CPU'nun aynı anda birden fazla işi (job) bellekte tutarak, CPU boş kaldığında birinden diğerine geçmesi prensibine ne ad verilir?",
    options: [
      "Tekli Programlama",
      "Çoklu Programlama (Multiprogramming)",
      "Zaman Paylaşımı (Time-sharing)",
      "Paralel İşleme",
      "Dağıtık Sistemler",
    ],
    correctAnswer: "Çoklu Programlama (Multiprogramming)",
  },
  {
    id: 44,
    questionText:
      "Kesmeler (Interrupts) ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Donanım, CPU'ya sinyal göndererek kesme tetikleyebilir",
      "Yazılım, 'system call' yaparak kesme tetikleyebilir",
      "Kesme geldiğinde CPU mevcut işini durdurur ve kesme servis rutinine (ISR) dallanır",
      "Kesme vektörü, kesme servis rutinlerinin adreslerini tutar",
      "Kesmeler sadece donanım hataları oluştuğunda meydana gelir",
    ],
    correctAnswer: "Kesmeler sadece donanım hataları oluştuğunda meydana gelir",
  },
  {
    id: 45,
    questionText:
      "İşletim sisteminin iki modlu (dual-mode) çalışması (User Mode / Kernel Mode) temel olarak neyi amaçlar?",
    options: [
      "Bilgisayarın daha hızlı çalışmasını sağlamak",
      "İşletim sistemini ve kullanıcıları hatalı veya kötü niyetli programlardan korumak",
      "Grafik arayüz performansını artırmak",
      "Bellek miktarını sanal olarak artırmak",
      "Daha fazla kullanıcının sisteme bağlanmasını sağlamak",
    ],
    correctAnswer:
      "İşletim sistemini ve kullanıcıları hatalı veya kötü niyetli programlardan korumak",
  },
  {
    id: 46,
    questionText:
      "Aşağıdakilerden hangisi bir işletim sisteminin 'kernel' (çekirdek) tanımına en uygundur?",
    options: [
      "Sistemle birlikte gelen tüm yazılımlar",
      "Bilgisayar açıldığında çalışan ve her zaman bellekte olan program",
      "Sadece dosya yönetimini yapan modül",
      "Kullanıcının gördüğü grafik arayüz (GUI)",
      "Web tarayıcısı ve metin editörü gibi uygulama yazılımları",
    ],
    correctAnswer:
      "Bilgisayar açıldığında çalışan ve her zaman bellekte olan program",
  },
  {
    id: 47,
    questionText:
      "Bellek hiyerarşisinde en hızlıdan en yavaşa doğru sıralama hangisidir?",
    options: [
      "Register - Cache - Main Memory - Disk",
      "Disk - Main Memory - Cache - Register",
      "Cache - Register - Main Memory - Disk",
      "Register - Main Memory - Cache - Disk",
      "Main Memory - Cache - Register - Disk",
    ],
    correctAnswer: "Register - Cache - Main Memory - Disk",
  },
  {
    id: 48,
    questionText:
      "Önbelleğe alma (Caching) işlemi için aşağıdakilerden hangisi söylenemez?",
    options: [
      "Bilginin daha hızlı bir depolama sistemine geçici olarak kopyalanmasıdır",
      "Hızlı olan depolama birimi 'cache' olarak adlandırılır",
      "Cache yönetimi önemli bir tasarım problemidir",
      "Cache belleğin boyutu ana bellekten büyüktür",
      "Veri transfer hızını artırmak için kullanılır",
    ],
    correctAnswer: "Cache belleğin boyutu ana bellekten büyüktür",
  },
  {
    id: 49,
    questionText:
      "Bilgisayar ilk açıldığında çalışan ve işletim sistemini yükleyen ilk küçük koda ne ad verilir?",
    options: [
      "Kernel",
      "Microcode",
      "Bootstrap program",
      "Interrupt Vector",
      "System Call",
    ],
    correctAnswer: "Bootstrap program",
  },
  {
    id: 50,
    questionText:
      "Birden fazla CPU'nun aynı fiziksel belleği ve çevre birimlerini paylaştığı sistemlere ne ad verilir?",
    options: [
      "Gevşek bağlı (Loosely coupled) sistemler",
      "Kümeleme (Clustered) sistemleri",
      "Sıkı bağlı (Tightly coupled) paralel sistemler",
      "Tek işlemcili sistemler",
      "Mobil sistemler",
    ],
    correctAnswer: "Sıkı bağlı (Tightly coupled) paralel sistemler",
  },
  {
    id: 51,
    questionText:
      "Kullanıcı ile işletim sistemi arasındaki etkileşimi sağlayan ve komutların doğrudan girilmesine olanak tanıyan yapı hangisidir?",
    options: [
      "System Call",
      "CLI (Command Line Interface)",
      "GUI (Graphical User Interface)",
      "API (Application Programming Interface)",
      "Kernel",
    ],
    correctAnswer: "CLI (Command Line Interface)",
  },
  {
    id: 52,
    questionText:
      "İşletim sistemi servislerine programatik olarak erişim sağlayan arayüz aşağıdakilerden hangisidir?",
    options: [
      "Sistem Çağrıları (System Calls)",
      "Sistem Programları",
      "Komut Yorumlayıcı",
      "Sürücüler",
      "BIOS",
    ],
    correctAnswer: "Sistem Çağrıları (System Calls)",
  },
  {
    id: 53,
    questionText:
      "Parametrelerin sistem çağrılarına aktarılmasında en yaygın kullanılan ve hızlı yöntem hangisidir?",
    options: [
      "Parametreleri bir blok halinde belleğe yazmak",
      "Parametreleri yığına (stack) atmak",
      "Parametreleri CPU kayıtçılarında (registers) geçirmek",
      "Parametreleri diske kaydetmek",
      "Parametreleri ağ üzerinden göndermek",
    ],
    correctAnswer: "Parametreleri CPU kayıtçılarında (registers) geçirmek",
  },
  {
    id: 54,
    questionText:
      "Bir işletim sistemi tasarımında 'mekanizma' (mechanism) ve 'politika' (policy) kavramlarının ayrılması neyi sağlar?",
    options: [
      "Sistemin daha yavaş çalışmasını",
      "Esnekliği (Aynı mekanizma farklı politikalarla kullanılabilir)",
      "Güvenlik açıklarının artmasını",
      "Kodun daha karmaşık hale gelmesini",
      "Bellek kullanımının azalmasını",
    ],
    correctAnswer:
      "Esnekliği (Aynı mekanizma farklı politikalarla kullanılabilir)",
  },
  {
    id: 55,
    questionText:
      "Çekirdeğin (Kernel) temel fonksiyonlarını küçük tutan ve diğer servisleri kullanıcı modunda çalıştıran yapı hangisidir?",
    options: [
      "Monolitik Yapı",
      "Katmanlı Yapı",
      "Mikroçekirdek (Microkernel)",
      "Modüler Yapı",
      "Hibrit Yapı",
    ],
    correctAnswer: "Mikroçekirdek (Microkernel)",
  },
  {
    id: 56,
    questionText:
      "Linux ve UNIX sistemlerde standart C kütüphanesi (libc) üzerinden yapılan sistem çağrıları hangi arayüzü kullanır?",
    options: [
      "Win32 API",
      "POSIX API",
      "Java API",
      ".NET Framework",
      "Android API",
    ],
    correctAnswer: "POSIX API",
  },
  {
    id: 57,
    questionText:
      "'Süreç kontrolü' (Process Control) kategorisindeki sistem çağrıları arasında hangisi yer almaz?",
    options: [
      "end, abort",
      "load, execute",
      "create process, terminate process",
      "open, close",
      "wait for time",
    ],
    correctAnswer: "open, close",
  },
  {
    id: 58,
    questionText: "Aşağıdakilerden hangisi bir sistem programı değildir?",
    options: [
      "Dosya kopyalama aracı",
      "Derleyici (Compiler)",
      "Metin editörü",
      "Web tarayıcısı",
      "Durum bilgisi gösteren araçlar",
    ],
    correctAnswer: "Web tarayıcısı",
  },
  {
    id: 59,
    questionText:
      "Modern işletim sistemlerinin çoğunda (Solaris, Linux, Windows vb.) kullanılan, çekirdek özelliklerinin çalışma anında eklenip çıkarılmasına olanak tanıyan yapı hangisidir?",
    options: [
      "Mikroçekirdek",
      "Katmanlı Yapı",
      "Yüklenebilir Çekirdek Modülleri (LKM)",
      "Monolitik Yapı",
      "Basit Yapı",
    ],
    correctAnswer: "Yüklenebilir Çekirdek Modülleri (LKM)",
  },
  {
    id: 60,
    questionText:
      "Bir sistem çağrısı yapıldığında, kontrol kullanıcı modundan çekirdek moduna nasıl geçer?",
    options: [
      "Yazılım kesmesi (Trap/Interrupt) ile",
      "CPU hızını artırarak",
      "Belleği sıfırlayarak",
      "Kullanıcı programını kapatarak",
      "Yeni bir thread oluşturarak",
    ],
    correctAnswer: "Yazılım kesmesi (Trap/Interrupt) ile",
  },
  {
    id: 61,
    questionText:
      "Bir sürecin (process) bellekteki görüntüsünde 'Stack' (Yığın) bölümü neyi tutar?",
    options: [
      "Global değişkenleri",
      "Yürütülebilir kodu",
      "Geçici verileri (fonksiyon parametreleri, dönüş adresleri, yerel değişkenler)",
      "Dinamik olarak ayrılan belleği (malloc)",
      "CPU kayıtçılarını",
    ],
    correctAnswer:
      "Geçici verileri (fonksiyon parametreleri, dönüş adresleri, yerel değişkenler)",
  },
  {
    id: 62,
    questionText:
      "Bir sürecin yaşam döngüsünde, CPU'nun başka bir sürece verilmesi nedeniyle bekleyen sürecin durumu hangisidir?",
    options: [
      "New",
      "Running",
      "Waiting (Bloklanmış)",
      "Ready (Hazır)",
      "Terminated",
    ],
    correctAnswer: "Ready (Hazır)",
  },
  {
    id: 63,
    questionText:
      "İşlem Kontrol Bloğu (PCB) içinde aşağıdakilerden hangisi bulunmaz?",
    options: [
      "Süreç durumu (Process state)",
      "Program Sayacı (Program Counter)",
      "CPU Kayıtçıları",
      "Kullanıcının şifre bilgisi",
      "Hafıza yönetim bilgileri",
    ],
    correctAnswer: "Kullanıcının şifre bilgisi",
  },
  {
    id: 64,
    questionText: "'Context Switch' (Bağlam Değişimi) için hangisi doğrudur?",
    options: [
      "Sisteme herhangi bir ek yük (overhead) getirmez",
      "CPU'nun bir süreçten diğerine geçmesi sırasında mevcut durumun kaydedilmesi ve yeni durumun yüklenmesidir",
      "Sadece süreç bittiğinde gerçekleşir",
      "Bellek miktarını artırmak için yapılır",
      "İşlemci hızını kalıcı olarak artırır",
    ],
    correctAnswer:
      "CPU'nun bir süreçten diğerine geçmesi sırasında mevcut durumun kaydedilmesi ve yeni durumun yüklenmesidir",
  },
  {
    id: 65,
    questionText:
      "Yeni oluşturulan bir sürecin, ebeveyn sürecin (parent) adres alanının kopyasına sahip olduğu sistem çağrısı hangisidir?",
    options: ["exec()", "wait()", "fork()", "exit()", "abort()"],
    correctAnswer: "fork()",
  },
  {
    id: 66,
    questionText:
      "Bir ebeveyn sürecin, çocuk süreci bittikten sonra onun durumunu okumaması sonucunda çocuk sürecin sistemde kapladığı duruma ne denir?",
    options: [
      "Orphan (Yetim) process",
      "Zombie process",
      "Daemon process",
      "Background process",
      "Foreground process",
    ],
    correctAnswer: "Zombie process",
  },
  {
    id: 67,
    questionText:
      "Kısa vadeli zamanlayıcı (Short-term scheduler) temel olarak ne yapar?",
    options: [
      "Hangi sürecin diske gönderileceğine karar verir",
      "Hazır kuyruğundaki hangi sürecin CPU'ya atanacağına karar verir",
      "Hangi sürecin sisteme kabul edileceğine karar verir",
      "Süreçler arasındaki iletişimi sağlar",
      "Bellek alanlarını temizler",
    ],
    correctAnswer:
      "Hazır kuyruğundaki hangi sürecin CPU'ya atanacağına karar verir",
  },
  {
    id: 68,
    questionText:
      "Süreçler arası iletişimde (IPC) 'Paylaşılan Bellek' (Shared Memory) yönteminin 'Mesaj Aktarımı' (Message Passing) yöntemine göre avantajı nedir?",
    options: [
      "Daha güvenlidir",
      "Uygulanması daha kolaydır",
      "Çekirdek müdahalesi gerekmediği için daha hızlıdır",
      "Dağıtık sistemlerde daha iyi çalışır",
      "Bellek karmaşasını önler",
    ],
    correctAnswer: "Çekirdek müdahalesi gerekmediği için daha hızlıdır",
  },
  {
    id: 69,
    questionText:
      "Dolaylı iletişimde (Indirect Communication) mesajlar nereye gönderilir?",
    options: [
      "Doğrudan alıcı sürece",
      "Paylaşılan bir dosyaya",
      "Posta kutularına veya portlara",
      "CPU kayıtçılarına",
      "İşletim sistemi çekirdeğine",
    ],
    correctAnswer: "Posta kutularına veya portlara",
  },
  {
    id: 70,
    questionText:
      "Soketler (Sockets) ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Sadece aynı bilgisayar üzerindeki süreçler için kullanılır",
      "Bir IP adresi ve bir port numarasının birleşimidir",
      "Sadece UDP protokolünü destekler",
      "RPC'den daha yüksek seviyeli bir yapıdır",
      "Fiziksel donanım kablolarıdır",
    ],
    correctAnswer: "Bir IP adresi ve bir port numarasının birleşimidir",
  },
  {
    id: 71,
    questionText:
      "Bir iş parçacığı (thread) ile bir süreç (process) arasındaki temel fark nedir?",
    options: [
      "Süreçlerin daha hızlı oluşturulması",
      "İş parçacıklarının ait oldukları sürecin kaynaklarını (kod, veri) paylaşması",
      "İş parçacıklarının kendi adres alanlarının olması",
      "Süreçlerin aynı anda birden fazla iş yapamaması",
      "İş parçacıklarının sistem çağrısı yapamaması",
    ],
    correctAnswer:
      "İş parçacıklarının ait oldukları sürecin kaynaklarını (kod, veri) paylaşması",
  },
  {
    id: 72,
    questionText:
      "Çok çekirdekli sistemlerde, farklı iş parçacıklarının aynı anda farklı çekirdeklerde çalışmasına ne ad verilir?",
    options: [
      "Concurrency (Eşzamanlılık)",
      "Parallelism (Paralellik)",
      "Multitasking",
      "Serialization",
      "Pipelining",
    ],
    correctAnswer: "Parallelism (Paralellik)",
  },
  {
    id: 73,
    questionText:
      "Kullanıcı düzeyindeki birçok iş parçacığının tek bir çekirdek iş parçacığına eşlendiği model hangisidir?",
    options: [
      "Many-to-One",
      "One-to-One",
      "Many-to-Many",
      "Two-level model",
      "Single-thread model",
    ],
    correctAnswer: "Many-to-One",
  },
  {
    id: 74,
    questionText:
      "'One-to-One' (Bire-Bir) iş parçacığı modelinin en büyük dezavantajı nedir?",
    options: [
      "Eşzamanlılığı kısıtlaması",
      "Bir iş parçacığı bloklandığında tüm sürecin durması",
      "Her kullanıcı iş parçacığı için bir çekirdek iş parçacığı oluşturmanın getirdiği maliyet/overhead",
      "Çok işlemcili sistemlerde çalışmaması",
      "Sadece UNIX sistemlerde kullanılabilmesi",
    ],
    correctAnswer:
      "Her kullanıcı iş parçacığı için bir çekirdek iş parçacığı oluşturmanın getirdiği maliyet/overhead",
  },
  {
    id: 75,
    questionText:
      "Bir sürecin içindeki bir iş parçacığı fork() sistem çağrısını yaparsa ne olur?",
    options: [
      "Tüm süreç ve tüm iş parçacıkları kopyalanır",
      "Sadece fork() yapan iş parçacığı kopyalanır",
      "İşletim sistemi hata verir",
      "Tüm iş parçacıkları sonlanır",
      "Yeni bir süreç değil, yeni bir thread oluşturulur",
    ],
    correctAnswer: "Sadece fork() yapan iş parçacığı kopyalanır",
  },
  {
    id: 76,
    questionText:
      "İş parçacığı havuzu (Thread Pool) kullanmanın temel amacı nedir?",
    options: [
      "Sınırsız sayıda thread oluşturmak",
      "Thread oluşturma maliyetini düşürmek ve sistem kaynaklarını korumak",
      "Thread'lerin daha yavaş çalışmasını sağlamak",
      "Güvenliği artırmak",
      "Program kodunu kısaltmak",
    ],
    correctAnswer:
      "Thread oluşturma maliyetini düşürmek ve sistem kaynaklarını korumak",
  },
  {
    id: 77,
    questionText:
      "Windows işletim sisteminde, her iş parçacığının kullanıcı modunda çalışırken kullandığı ve thread-local storage (TLS) gibi bilgileri tutan yapı hangisidir?",
    options: [
      "ETHREAD",
      "KTHREAD",
      "TEB (Thread Environment Block)",
      "PCB",
      "CSRSS",
    ],
    correctAnswer: "TEB (Thread Environment Block)",
  },
  {
    id: 78,
    questionText:
      "Aşağıdakilerden hangisi Pthreads (POSIX Threads) için söylenemez?",
    options: [
      "Bir IEEE standardıdır",
      "Sadece bir spesifikasyondur, uygulama (implementation) değildir",
      "Sadece C dilinde kullanılabilir",
      "Hem kullanıcı hem çekirdek düzeyinde olabilir",
      "Linux ve Mac OS X tarafından desteklenir",
    ],
    correctAnswer: "Sadece C dilinde kullanılabilir",
  },
  {
    id: 79,
    questionText:
      "Java iş parçacıkları (Java Threads) ile ilgili hangisi doğrudur?",
    options: [
      "Doğrudan donanım üzerinde çalışırlar",
      "JVM (Java Sanal Makinesi) tarafından yönetilirler",
      "İşletim sistemi tarafından görünmezler",
      "Sadece tek çekirdekli sistemlerde çalışırlar",
      "Kullanıcı tarafından manuel olarak sonlandırılamazlar",
    ],
    correctAnswer: "JVM (Java Sanal Makinesi) tarafından yönetilirler",
  },
  {
    id: 80,
    questionText:
      "'Signal Handling' (Sinyal Yönetimi) ile ilgili olarak, çok iş parçacıklı bir programda bir sinyal kime gönderilebilir?",
    options: [
      "Sinyalin ilgili olduğu iş parçacığına",
      "Süreçteki her iş parçacığına",
      "Süreçteki belirli iş parçacıklarına",
      "Sadece ana iş parçacığına",
      "Hepsi",
    ],
    correctAnswer: "Hepsi",
  },
  {
    id: 81,
    questionText: "Bir sürecin 'Heap' (Yığın) alanı ne için kullanılır?",
    options: [
      "Yerel değişkenler için",
      "Çalışma zamanında dinamik bellek ayırma için",
      "Fonksiyon dönüş adresleri için",
      "Sadece işletim sistemi verileri için",
      "Programın makine kodunu tutmak için",
    ],
    correctAnswer: "Çalışma zamanında dinamik bellek ayırma için",
  },
  {
    id: 82,
    questionText: "İşletim sisteminde 'Traps' (Tuzaklar) ne tür kesmelerdir?",
    options: [
      "Donanım hatası sonucu oluşan kesmeler",
      "Yazılım hatası veya kullanıcı isteği sonucu oluşan kesmeler",
      "Sadece diskten gelen sinyaller",
      "Güç kesintisi sinyalleri",
      "Ağdan gelen veri sinyalleri",
    ],
    correctAnswer:
      "Yazılım hatası veya kullanıcı isteği sonucu oluşan kesmeler",
  },
  {
    id: 83,
    questionText: "'Graceful degradation' terimi ne anlama gelir?",
    options: [
      "Sistemin hata anında tamamen durması",
      "Donanım arızası olsa bile sistemin kapasitesi düşerek hizmet vermeye devam etmesi",
      "Yazılımın her zaman en yüksek hızda çalışması",
      "Sistemin otomatik olarak kendini güncellemesi",
      "Verilerin düzenli olarak yedeklenmesi",
    ],
    correctAnswer:
      "Donanım arızası olsa bile sistemin kapasitesi düşerek hizmet vermeye devam etmesi",
  },
  {
    id: 84,
    questionText:
      "Aşağıdakilerden hangisi bir 'Süreç Durumu' (Process State) değildir?",
    options: ["Ready", "Waiting", "Executing", "Sleeping", "Terminated"],
    correctAnswer: "Sleeping",
  },
  {
    id: 85,
    questionText:
      "Mikroçekirdek mimarisinde süreçler arası iletişim genellikle hangi yöntemle sağlanır?",
    options: [
      "Paylaşılan Bellek (Shared Memory)",
      "Mesaj Aktarımı (Message Passing)",
      "Küresel değişkenler",
      "Doğrudan donanım erişimi",
      "Dosya yazma",
    ],
    correctAnswer: "Mesaj Aktarımı (Message Passing)",
  },
  {
    id: 86,
    questionText:
      "Android işletim sisteminde uygulamaların çalıştırıldığı sanal makine (modern sürümlerde) hangisidir?",
    options: [
      "Dalvik VM",
      "ART (Android Runtime)",
      "Java VM",
      ".NET Core",
      "Python VM",
    ],
    correctAnswer: "ART (Android Runtime)",
  },
  {
    id: 87,
    questionText:
      "'Long-term scheduler' (Uzun vadeli zamanlayıcı) temel amacı nedir?",
    options: [
      "CPU verimliliğini anlık optimize etmek",
      "Çoklu programlama derecesini (degree of multiprogramming) kontrol etmek",
      "Sanal belleği yönetmek",
      "I/O işlemlerini hızlandırmak",
      "Kullanıcı arayüzünü güncellemek",
    ],
    correctAnswer:
      "Çoklu programlama derecesini (degree of multiprogramming) kontrol etmek",
  },
  {
    id: 88,
    questionText:
      "Bir sürecin kendisini sonlandırması için kullandığı sistem çağrısı hangisidir?",
    options: ["abort()", "fork()", "exit()", "wait()", "stop()"],
    correctAnswer: "exit()",
  },
  {
    id: 89,
    questionText: "Aşağıdakilerden hangisi bir CPU zamanlama kriteri değildir?",
    options: [
      "CPU kullanımı (utilization)",
      "İşlem çıktısı (throughput)",
      "Bekleme süresi (waiting time)",
      "Dosya boyutu (file size)",
      "Yanıt süresi (response time)",
    ],
    correctAnswer: "Dosya boyutu (file size)",
  },
  {
    id: 90,
    questionText:
      "Bir iş parçacığı sonlandığında kaynaklarının geri alınması için ebeveynin beklemesi durumuna ne denir?",
    options: ["Detaching", "Joining", "Blocking", "Yielding", "Terminating"],
    correctAnswer: "Joining",
  },
  {
    id: 91,
    questionText:
      "I. İş parçacıkları süreçlere göre daha hızlı oluşturulur. II. İş parçacıkları arası iletişim süreçlere göre daha kolaydır. III. Bir iş parçacığı çökerse, aynı süreçteki diğer tüm iş parçacıkları ve süreç de çökebilir. Yukarıdakilerden hangileri doğrudur?",
    options: ["Yalnız I", "I ve II", "II ve III", "I ve III", "I, II ve III"],
    correctAnswer: "I, II ve III",
  },
  {
    id: 92,
    questionText:
      "I. Monolitik çekirdekler mikroçekirdeklere göre genellikle daha hızlıdır. II. Mikroçekirdeklerin genişletilmesi daha kolaydır. III. Windows tamamen monolitik bir yapıya sahiptir. Yukarıdakilerden hangileri doğrudur?",
    options: ["Yalnız I", "I ve II", "II ve III", "I ve III", "I, II ve III"],
    correctAnswer: "I ve II",
  },
  {
    id: 93,
    questionText:
      "Aşağıdakilerden hangisi bir 'Sistem Çağrısı' tetiklenmesine neden olur?",
    options: [
      "Bir dosyanın okunması",
      "Ekrana bir karakter basılması",
      "Yeni bir sürecin başlatılması",
      "Bellekten yer ayrılması",
      "Hepsi",
    ],
    correctAnswer: "Hepsi",
  },
  {
    id: 94,
    questionText:
      "I. Ready Queue (Hazır Kuyruğu) II. Device Queue (Cihaz Kuyruğu) III. Job Queue (İş Kuyruğu) İşletim sisteminde süreçler yukarıdaki kuyruklardan hangilerinde bulunabilir?",
    options: ["Yalnız I", "I ve II", "II ve III", "I ve III", "I, II ve III"],
    correctAnswer: "I, II ve III",
  },
  {
    id: 95,
    questionText:
      "'Sanal Makineler' (Virtual Machines) ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Donanımın tamamen soyutlanmasını sağlar",
      "Bir fiziksel bilgisayar üzerinde birden fazla işletim sistemi çalıştırabilir",
      "Ana işletim sisteminden tamamen bağımsız ve izoledir",
      "Fiziksel donanımdan daha hızlı çalışır",
      "Bulut bilişimde yaygın kullanılır",
    ],
    correctAnswer: "Fiziksel donanımdan daha hızlı çalışır",
  },
  {
    id: 96,
    questionText:
      "'Medium-term scheduler' (Orta vadeli zamanlayıcı) ne zaman devreye girer?",
    options: [
      "Yeni bir iş geldiğinde",
      "Bellek yetersiz kaldığında süreçleri bellekten diske (swapping) taşımak için",
      "CPU boşa çıktığında",
      "I/O işlemi bittiğinde",
      "Program hata verdiğinde",
    ],
    correctAnswer:
      "Bellek yetersiz kaldığında süreçleri bellekten diske (swapping) taşımak için",
  },
  {
    id: 97,
    questionText:
      "Aşağıdaki Windows veri yapılarından hangisi çekirdek modunda (kernel mode) bulunur?",
    options: [
      "TEB (Thread Environment Block)",
      "ETHREAD (Executive Thread Block)",
      "Kullanıcı yığını (User stack)",
      "Uygulama kodları",
      "DLL kütüphaneleri",
    ],
    correctAnswer: "ETHREAD (Executive Thread Block)",
  },
  {
    id: 98,
    questionText: "'Direct Memory Access' (DMA) ne amaçla kullanılır?",
    options: [
      "CPU'yu her byte transferi için meşgul etmeden yüksek hızlı I/O yapmak için",
      "İşlemci hızını artırmak için",
      "İnternet hızını artırmak için",
      "Ekran çözünürlüğünü artırmak için",
      "Yazılım hatalarını bulmak için",
    ],
    correctAnswer:
      "CPU'yu her byte transferi için meşgul etmeden yüksek hızlı I/O yapmak için",
  },
  {
    id: 99,
    questionText: "'Symmteric Multiprocessing' (SMP) sistemlerde:",
    options: [
      "Sadece bir CPU tüm kararları verir",
      "Her işlemci işletim sisteminin kopyasını çalıştırır ve birbirleriyle eşittir",
      "İşlemciler farklı bellekleri kullanır",
      "Sadece ana-yardımcı ilişkisi vardır",
      "Verimlilik her zaman CPU sayısı ile doğru orantılıdır",
    ],
    correctAnswer:
      "Her işlemci işletim sisteminin kopyasını çalıştırır ve birbirleriyle eşittir",
  },
  {
    id: 100,
    questionText:
      "İşletim sisteminin 'I/O Yönetimi' birimi aşağıdakilerden hangisinden sorumlu değildir?",
    options: [
      "Bellek yönetimi (buffering, caching, spooling)",
      "Genel sürücü arayüzü sunma",
      "Belirli donanımlar için sürücü sağlama",
      "Kullanıcı şifrelerini kriptolama",
      "Cihazlar arası veri transferi",
    ],
    correctAnswer: "Kullanıcı şifrelerini kriptolama",
  },
];
