<?php
/**
 * Template Name: Blog page
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package  i-max
 * @since i-max 1.0
 */

get_header(); ?>

<?php do_shortcode('[WP_HEADER_IMAGES]'); ?>
	<?php global $post;	?>
	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">

			<?php /* The loop */ ?>
			<?php query_posts('category_name=blog');?>
				<?php if ( have_posts() ) : ?>
				<?php /* The loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'content', get_post_format() ); ?>
				<?php endwhile; ?>
	
				<?php imax_paging_nav(); ?>
	
			<?php else : ?>
				<?php get_template_part( 'content', 'none' ); ?>
			<?php endif; ?>

		</div><!-- #content -->
        <?php get_sidebar(); ?>
	</div><!-- #primary -->


<?php get_footer(); ?>