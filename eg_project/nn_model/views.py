from django.shortcuts import render
import nn_model
# Create your views here.
def evaluate():
	"""
	Evalutes the given paragraph and assigns scores in seperate variables
	"""
	# Calculating and getting the scores
	core_engine = nn_model.EssayGraderClass()
	grammer_score = core_engine.grammer_and_spell_check()
	style_score = core_engine.style_continuity_check()
	cc_score = core_engine.coherence_cohesion_check()
	lexical_score = core_engine.lexical_resource_check()
	complexity_score = core_engine.sentence_complexity_check()
	
	# Save all the scores as dictionary
	score_context = {} 
	score_context['grammer'] = grammer_score
	score_context['style'] = style_score
	score_context['cc'] = cc_score
	score_context['lexical'] = lexical_score
	score_context['complexity'] = complexity_score