package com.mathi.bah.demo.repository;

import com.mathi.bah.demo.domain.Post;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface PostRepositoryWithBagRelationships {
    Optional<Post> fetchBagRelationships(Optional<Post> post);

    List<Post> fetchBagRelationships(List<Post> posts);

    Page<Post> fetchBagRelationships(Page<Post> posts);
}
