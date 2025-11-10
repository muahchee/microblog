--
-- PostgreSQL database dump
--

\restrict J6hcHGNSMOGxSnIEZhaOEjNNuK4qRpsbsViBt02NN3jhdf4IyauQa8ecv2b6zit

-- Dumped from database version 16.10 (Ubuntu 16.10-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.10 (Ubuntu 16.10-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: muahchee
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    userid integer,
    text text,
    "timestamp" timestamp without time zone,
    imgfile text,
    imgalt character varying(255)
);


ALTER TABLE public.posts OWNER TO muahchee;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: muahchee
--

ALTER TABLE public.posts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: session; Type: TABLE; Schema: public; Owner: muahchee
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO muahchee;

--
-- Name: users; Type: TABLE; Schema: public; Owner: muahchee
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    admin boolean
);


ALTER TABLE public.users OWNER TO muahchee;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: muahchee
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: muahchee
--

COPY public.posts (id, userid, text, "timestamp", imgfile, imgalt) FROM stdin;
27	1	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3nDzf8-uaTk?si=MWXcyCxkn1w2tFFW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\n<p>very underrated video! always makes me smile</p>\n<p>( ´ ▿ ` )</p>\n<p>The adventures of swagmark deathguy.</p>	2025-11-09 11:36:07.754	\N	
26	1	<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=441884888/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/track=2177288106/transparent=true/" seamless><a href="https://dbsoundworks.bandcamp.com/album/crypt-of-the-necrodancer-ost">Crypt of the Necrodancer OST by Danny Baranowsky</a></iframe>\n<p>One of my favourite necrodancer tracks!</p>	2025-11-09 11:33:17.069	\N	
32	1	<p>Richard Scarry drawing. Such a lovely art style!</p>\n<p>i found out about him from the <a href="https://www.youtube.com/watch?v=VTLB56wDBq0">Nobilis actual play at Quinns Quest</a></p>	2025-11-09 18:14:08.449	colouring+busytown+2.jpg-1762676565368-417333680.jpeg	busy town
39	1	<p>A great reaction image from Onna no Sono no Hoshi. I remember laughing out loud when I saw this!</p>	2025-11-09 21:31:15.649	coming-over-next-week.png-1762677075643-190203554.png	hoshi sensei looking at kobayashi, and then looking away when kobayashi says 'what?'
23	1	<h1 id="success">Success!</h1>\n<p>I can finally write in markdown!! Yipeeeee ~</p>	2025-11-08 23:38:40.018	general-lance-crit.gif-1762678259597-778294252.gif	general lance crit animation
21	1	<p>My old profile picture! I downloaded my tumblr blog recently. I might delete it soon</p>	2025-11-08 23:23:41.495	profilepic.jpg-1762678313222-390899771.jpeg	a person smiling in profile
20	1	<p>My hag in white tier list! I finished it a long time ago but I didn't have to motivation to write a review… </p>\n<p>I really enjoyed this rom hack though!</p>	2025-11-08 23:22:25.256	hag-tierlist.png-1762678346384-621524105.png	hag in white tierlist
18	1	<p>Katamari cherry texture. I wish I knew how to get the 3d object. I'm not great at blender…</p>	2025-11-08 15:25:02.792	CHERRY01_A_1.png-1762678546581-362642905.png	cherry texture from katamari damacy
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: muahchee
--

COPY public.session (sid, sess, expire) FROM stdin;
gsROL93SbnVfT22zHRL-E-p4JbnjBvxq	{"cookie":{"originalMaxAge":86400000,"expires":"2025-11-10T09:59:40.852Z","httpOnly":true,"path":"/"},"passport":{"user":1}}	2025-11-10 23:01:34
bmpetz0pKkAOP7UFVP-xaD0IsI7NSawo	{"cookie":{"originalMaxAge":86400000,"expires":"2025-11-10T19:04:48.059Z","httpOnly":true,"path":"/"},"passport":{"user":1}}	2025-11-11 09:29:33
W8Po925w18Mm33ySvL3GF8nv6Z5L8-j0	{"cookie":{"originalMaxAge":86400000,"expires":"2025-11-11T03:45:56.942Z","httpOnly":true,"path":"/"},"passport":{"user":1}}	2025-11-11 17:12:38
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: muahchee
--

COPY public.users (id, username, password, admin) FROM stdin;
1	pipis	$2b$10$KlqTathh7sKcf5TPpnLNne6TGxkNwBua8F24VlcMnau0RyLLBQxK.	t
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muahchee
--

SELECT pg_catalog.setval('public.posts_id_seq', 39, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muahchee
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: muahchee
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: muahchee
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: muahchee
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: IDX_session_expire; Type: INDEX; Schema: public; Owner: muahchee
--

CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);


--
-- Name: posts posts_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: muahchee
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

\unrestrict J6hcHGNSMOGxSnIEZhaOEjNNuK4qRpsbsViBt02NN3jhdf4IyauQa8ecv2b6zit

